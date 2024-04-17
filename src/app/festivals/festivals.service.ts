import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FestivalsService {
  constructor (private http: HttpClient) {}

  festivals = [
    {name: 'Noisily', location: 'Leicestershire', website: 'https://noisilyfestival.com/'},
    {name: 'SGP', location: 'Huntingdon', website: 'https://www.secretgardenparty.com/'},
    {name: 'Wonkfest', location: 'Prangton', website: '#'},
    {name: 'Scrapness', location: 'Boshford', website: '#'},
  ]

  getFestivals() {
    return this.festivals.slice();
  }
}