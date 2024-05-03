import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuestsService } from '../../guests/guests.service';
import { Guest } from '../../guests/guest.model';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrl: './festival.component.scss',
  providers: [GuestsService]
})

export class FestivalComponent implements OnInit, OnDestroy {
  festival: { name: string, location: string, website: string };
  guestsShown = false;
  guestsEmpty: boolean;
  guests: Guest[];
  isFetching = false;
  error = null;
  private errorSubscription: Subscription;

  constructor(private route: ActivatedRoute, private guestsService: GuestsService) {
  }

  ngOnInit() {
    this.festival = {
      name: this.route.snapshot.params['name'],
      location: this.route.snapshot.params['location'],
      website: this.route.snapshot.params['website']
    }

    // subject error handling
    this.errorSubscription = this.guestsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;

    this.guestsService.getGuests()
      .subscribe(guests => {
        this.isFetching = false;
        this.guests = guests;
        this.areThereAnyGuests();
      }, error => {
        this.isFetching = false;
        this.error = error;
        console.log(error);
      }
    );
  }

  areThereAnyGuests() {
    this.guestsService.getGuests()
      .subscribe(guests => {
        this.guests = guests;
          if (this.guests.length === 0) {
            this.isFetching = false;
            this.guestsEmpty = true;
            this.guestsShown = false;
          } else {
            this.guestsEmpty = false;
          }
      });
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
        this.isFetching = false;
        this.guests = guests;
        if (this.guests.length > 0) {
          this.guestsShown = true;
        }
        this.areThereAnyGuests();
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      });
  }

  hideGuests() {
    this.guestsShown = false;
  }

  onHandleError() {
    this.isFetching = false;
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }
}
