import { Component } from '@angular/core';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrl: './festivals.component.scss'
})

export class FestivalsComponent {
  festivals = [
    {name: 'Noisily', location: 'Leicestershire', website: 'https://noisilyfestival.com/'},
    {name: 'SGP', location: 'Huntingdon', website: 'https://www.secretgardenparty.com/'},
    {name: 'Wonkfest', location: 'Prangton', website: '#'},
    {name: 'Scrapness', location: 'Fuckedshire', website: '#'},
  ]

}
