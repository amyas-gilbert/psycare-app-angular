import { Component, Inject } from '@angular/core';

import { FestivalsService } from './festivals.service';
import { Festival } from './festival/festival.model';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrl: './festivals.component.scss',
  providers: [FestivalsService]
})

export class FestivalsComponent {
  festivals: Festival[];

  constructor(@Inject(String) private festivalsService: FestivalsService) {}

  ngOnInit() {
    this.festivals = this.festivalsService.getFestivals();
  }
}
