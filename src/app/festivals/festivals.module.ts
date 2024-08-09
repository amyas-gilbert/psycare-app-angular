import { NgModule } from "@angular/core";
import { FestivalsComponent } from "./festivals.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
// import { FestivalComponent } from "./festival/festival.component";


@NgModule({
  declarations: [
    FestivalsComponent,
    // FestivalComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    FestivalsComponent,
    // FestivalComponent,
  ]
})
export class FestivalsModule {}
