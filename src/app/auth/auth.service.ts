import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { error } from "@angular/compiler-cli/src/transformers/util";

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
  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5ev5E71WN3keaviHsfYesB9VPrTJAPfY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5ev5E71WN3keaviHsfYesB9VPrTJAPfY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes) {
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
