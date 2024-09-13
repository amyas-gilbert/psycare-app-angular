import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GuestsService} from '../../guests/guests.service';
import {Guest} from '../../guests/guest.model';
import {Subscription} from "rxjs";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-festival',
    templateUrl: './festival.component.html',
    styleUrl: './festival.component.scss',
    providers: [GuestsService]
})

export class FestivalComponent implements OnInit, OnDestroy {
    festival: { name: string, location: string, website: string };
    guests: Guest[];

    guestForms: FormGroup[] = [];

    error = null;
    private errorSubscription: Subscription;

    constructor(private route: ActivatedRoute, private guestsService: GuestsService, private fb: FormBuilder) {
    }

    ngOnInit() {

        this.festival = {
            name: this.route.snapshot.params['name'],
            location: this.route.snapshot.params['location'],
            website: this.route.snapshot.params['website']
        }

        this.guests.forEach(guest => {
            const guestForm = new FormGroup({
                'name': new FormControl(guest.name),
                'arrivalTime': new FormControl(guest.arrivalTime),
                'description': new FormControl(guest.description),
                'arrivalNotes': new FormControl(guest.arrivalNotes)
            });
            this.guestForms.push(guestForm)
        });

        // subject error handling
        this.errorSubscription = this.guestsService.error.subscribe(errorMessage => {
            this.error = errorMessage;
        })

        this.guestsService.getGuests()
            .subscribe(guests => {
                    this.guests = guests;
                    console.log(guests);
                }, error => {
                    this.error = error;
                    console.log(error);
                }
            );
    }

    onCheckIn(index: number) {
        this.guestsService.addGuest(this.guestForms[index].value);
    }

    onHandleError() {
        this.error = null;
    }

    ngOnDestroy() {
        this.errorSubscription.unsubscribe();
    }
}
