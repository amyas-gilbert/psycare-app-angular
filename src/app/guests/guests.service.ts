import { Injectable } from "@angular/core";
import { Guest } from "./guest.model";
import { catchError, exhaustMap, map, take, tap } from "rxjs/operators";
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Subject, throwError } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class GuestsService {
  // using a subject for error handling - useful if multiple places in app that are interested in error
  error = new Subject<string>();


  constructor(private http: HttpClient, private authService: AuthService) {
  }

  addGuest(guestData: Guest) {

    // observing different types of responses
    this.http.post<{
      name: string
    }>('https://psycare-ng-db-default-rtdb.europe-west1.firebasedatabase.app/guests.json',
      guestData,
      {
        observe: 'response'
      }
    )
      .subscribe(responseData => {
          console.log(responseData);
        }, error => {
          this.error.next(error.message);
        }
      );
  }

  getGuests() {
    // let searchParams = new HttpParams();
    // searchParams = searchParams.append('print', 'pretty');
    // searchParams = searchParams.append('custom', 'key');

    return this.http.get<{
      [key: string]: Guest
    }>('https://psycare-ng-db-default-rtdb.europe-west1.firebasedatabase.app/guests.json'
    )
      .pipe(
        map((responseData) => {
          const guestsArray: Guest[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              guestsArray.push({...responseData[key], id: key});
            }
          }
          return guestsArray;
        }),
        catchError(errorResponse => {
          // do generic error handling stuff like send to analytics, log it etc
          return throwError(errorResponse);
        })
      )
  }

  deleteGuests() {
    return this.http.delete('https://psycare-ng-db-default-rtdb.europe-west1.firebasedatabase.app/guests.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(tap(event => {
      console.log(event);
      // tap allows you to get at the response without altering the response
      if (event.type === HttpEventType.Sent) {
        // whatever, tell the user it was sent or something
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }


  //
  // guests: Guest[] = [
  //   {name: 'Janek', checkInTime: '2am', description: 'wonky', notes: 'sleeping'},
  //   {name: 'Em', checkInTime: '5am', description: 'sassy', notes: 'on a rampage'}
  // ]
  //
  // addGuest(newGuest: Guest) {
  //   this.guests.push(newGuest);
  //   console.log(this.guests);
  // }
  //
  // getGuests() {
  //   return this.guests.slice()
  // }


  // add a new guest to the array in guestService
  // this.newGuest = {
  //   name: this.guestForm.value.name,
  //   time: this.guestForm.value.time,
  //   description: this.guestForm.value.description,
  //   notes: this.guestForm.value.notes
  // }
  // console.log(this.newGuest);
  // this.guestService.addGuest(this.newGuest);
  // this works but doesn't update guests array in festival.ts


}
