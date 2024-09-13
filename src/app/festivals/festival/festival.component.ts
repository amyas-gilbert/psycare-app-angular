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

    // error = null;
    // private errorSubscription: Subscription;

    constructor(private route: ActivatedRoute, private guestsService: GuestsService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.guestsService.getGuests()
            .subscribe(guests => {
                    this.guests = guests;
                    console.log(this.guests);

                    this.guests.forEach(guest => {
                        const guestForm = new FormGroup({
                            'name': new FormControl(),
                            'arrivalTime': new FormControl(),
                            'description': new FormControl(),
                            'arrivalNotes': new FormControl()
                        });

                        guestForm.setValue({
                            'name': guest.name,
                            'arrivalTime': guest.arrivalTime,
                            'description': guest.description,
                            'arrivalNotes': guest.arrivalNotes
                        })

                        this.guestForms.push(guestForm)
                    });

                }, error => {
                    // this.error = error;
                    console.log(error);
                }
            );

        this.festival = {
            name: this.route.snapshot.params['name'],
            location: this.route.snapshot.params['location'],
            website: this.route.snapshot.params['website']
        }

        // subject error handling
        // this.errorSubscription = this.guestsService.error.subscribe(errorMessage => {
        //     this.error = errorMessage;
        // })

    }

    onCheckIn(index: number) {
        this.guestsService.addGuest(this.guestForms[index].value);
        console.log(this.guests);
    }

    // onHandleError() {
    //     this.error = null;
    // }

    ngOnDestroy() {
        // this.errorSubscription.unsubscribe();
    }
}
