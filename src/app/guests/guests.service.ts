import { Injectable } from "@angular/core";
import { Guest } from "./guest.model";

@Injectable()
export class GuestsService {
  constructor () {}

  guests: Guest[] = [
    {name: 'Janek', time: '2am', description: 'wonky', notes: 'sleeping'},
    {name: 'Em', time: '5am', description: 'sassy', notes: 'on a rampage'}
  ]

  addGuest(newGuest: Guest) {
    this.guests.push(newGuest);
  }

  getGuests() {
    return this.guests.slice()
  }
}