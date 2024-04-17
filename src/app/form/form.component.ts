import { Component, OnInit } from '@angular/core';
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
  guestForm: FormGroup;
  newGuest: Guest;

  constructor(private guestService: GuestsService) {}
  
  ngOnInit() {
    this.guestForm = new FormGroup({
      'name': new FormControl(null),
      'time': new FormControl(null),
      'description': new FormControl(null),
      'notes': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.guestForm)
    // add a new guest to the array in guestService
    this.newGuest = {
      name: this.guestForm.value.name,
      time: this.guestForm.value.time,
      description: this.guestForm.value.description,
      notes: this.guestForm.value.notes
    }

    this.guestService.addGuest(this.newGuest);
  }
}
