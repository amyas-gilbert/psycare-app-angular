import { Component, OnInit } from '@angular/core';
import { Guest } from "./guest.model";
import { GuestsService } from "./guests.service";

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent implements OnInit {
  constructor(private guestsService: GuestsService) {
  }

  ngOnInit() {
      this.guestsService.getGuests();
  }
}
