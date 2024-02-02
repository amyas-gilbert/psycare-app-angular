import { Injectable } from "@angular/core";

export class FestivalsService {

    festivals = [
      {name: 'Noisily', location: 'Leicestershire', website: 'https://noisilyfestival.com/'},
      {name: 'SGP', location: 'Huntingdon', website: 'https://www.secretgardenparty.com/'},
      {name: 'Wonkfest', location: 'Prangton', website: '#'},
      {name: 'Scrapness', location: 'Fuckedshire', website: '#'},
    ]

    getFestivals() {
      return this.festivals.slice();
    }
}