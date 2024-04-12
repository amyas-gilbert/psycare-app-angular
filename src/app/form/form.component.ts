import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  guestForm: FormGroup;
  
  ngOnInit() {
    this.guestForm = new FormGroup({
      'name': new FormControl(null),
      'time': new FormControl(null),
      'description': new FormControl(null),
      'notes': new FormControl(null)
    });
  }
}
