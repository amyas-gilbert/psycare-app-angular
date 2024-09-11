import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, Subject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
  // user = new Subject<User>(); // this subject we can subscribe to and get new information whenever data is emitted
  user = new BehaviorSubject<User | null>(null); // behaves much like Subject, but also gives subscribers access to previous value even if they weren't subscribed when that value was emitted
      // means we can get access to the current user even if we subscribe to this after the user has logged in
  authChecked = new BehaviorSubject<boolean>(false);
  tokenExpirationTimer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient, private router: Router) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5ev5E71WN3keaviHsfYesB9VPrTJAPfY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError), tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5ev5E71WN3keaviHsfYesB9VPrTJAPfY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError), tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    if (isPlatformBrowser(this.platformId)) {
      const userDataString = localStorage.getItem('userData');
      if (!userDataString) {
        this.authChecked.next(true);
        return;
      }

      const userData: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(userDataString);
      console.log('User data from localStorage:', userData);  // Debugging
      if (!userData) {
        return;
      }

      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate));

      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(expirationDuration);
      }
      this.authChecked.next(true);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['auth']);
    // localStorage.clear();
    localStorage.removeItem('userData');
    this.authChecked.next(true);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
    console.log(expirationDuration)
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An error has occurred. What kind? Who knows!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already in the cult';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Wrong! Try again...';
        break;
      case 'USER_DISABLED':
        errorMessage = 'ACCESS DENIED'
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER': //why is this not working??
        errorMessage = 'Give it a rest, mate. Go do something else, come back in a bit.'
    }
    return throwError(errorMessage);
  }
}
