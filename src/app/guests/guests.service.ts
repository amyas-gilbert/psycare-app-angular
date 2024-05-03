import { Injectable } from "@angular/core";
import { Guest } from "./guest.model";
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Subject, throwError } from "rxjs";

@Injectable()
export class GuestsService {
  // using a subject for error handling - useful if multiple places in app that are interested in error
  error = new Subject<string>();


  constructor(private http: HttpClient) {
  }

  addGuest(guestData: Guest) {
    // console.log(guestData)

    this.http.post<{
      name: string
    }>('https://psycare-ng-db-default-rtdb.europe-west1.firebasedatabase.app/guests.json', guestData)
      .subscribe(responseData => {
          console.log(responseData);
        }, error => {
          this.error.next(error.message);
        }
      );
  }

  getGuests() {
    // this return allows us to access the response in components
    return this.http.get<{
      [key: string]: Guest
    }>('https://psycare-ng-db-default-rtdb.europe-west1.firebasedatabase.app/guests.json')
      // optional but recommended type casting for cleaner code, fewer errors, and better autocompletion
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
      );
    // it returns an Observable, so in the components we'll need to subscribe to the method to do stuff with the response
  }

  deleteGuests() {
    return this.http.delete('https://psycare-ng-db-default-rtdb.europe-west1.firebasedatabase.app/guests.json');
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
