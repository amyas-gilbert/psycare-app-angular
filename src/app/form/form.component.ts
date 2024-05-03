import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuestsService } from '../guests/guests.service';
import { Guest } from '../guests/guest.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [GuestsService]
})
export class FormComponent implements OnInit {
  // @Output() guestAdded = new EventEmitter;
  guestForm: FormGroup;

  constructor(private guestService: GuestsService) {
  }

  ngOnInit() {
    this.guestForm = new FormGroup({
      'name': new FormControl(null),
      'time': new FormControl(null),
      'description': new FormControl(null),
      'notes': new FormControl(null)
    });

    this.guestService.getGuests();
  }

  onCheckIn(guestData: Guest) {
    this.guestService.addGuest(guestData);
    this.guestService.noGuests = false;
    // this.guestAdded.emit();
  }

}
