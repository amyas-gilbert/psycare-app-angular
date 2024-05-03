import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestsService } from '../../guests/guests.service';
import { Guest } from '../../guests/guest.model';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrl: './festival.component.scss',
  providers: [GuestsService]
})

export class FestivalComponent {
  festival: { name: string, location: string, website: string };
  guestsShown: boolean = false;
  guestsEmpty: boolean;
  guests: Guest[];

  constructor(private route: ActivatedRoute, private guestsService: GuestsService) {
  }

  ngOnInit() {
    this.festival = {
      name: this.route.snapshot.params['name'],
      location: this.route.snapshot.params['location'],
      website: this.route.snapshot.params['website']
    }

    this.guestsService.getGuests()
      .subscribe(guests => {
        this.guests = guests;
        this.areThereAnyGuests();
      });
  }

  areThereAnyGuests() {
    if (this.guests) {
      if (this.guests.length < 1) {
        this.guestsEmpty = true;
        this.guestsShown = false;
      } else {
        this.guestsEmpty = false;
      }
    }
  }

  logGuests() {
    this.guestsService.getGuests()
      .subscribe(guests => {
        console.log(guests);
      });
  }

  clearGuests() {
    this.guestsService.deleteGuests()
      .subscribe(() => {
        this.guests = [];
        this.areThereAnyGuests();
      });
  }

  showGuests() {
    this.guestsService.getGuests()
      .subscribe(guests => {
        this.guests = guests;
        if (this.guests.length > 0) {
          this.guestsShown = true;
        }
        this.areThereAnyGuests();
      });
  }

  hideGuests() {
    this.guestsShown = false;
  }

}
