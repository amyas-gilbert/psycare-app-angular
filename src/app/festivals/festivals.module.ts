import { NgModule } from "@angular/core";
import { FestivalsComponent } from "./festivals.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FestivalComponent } from "./festival/festival.component";
import { FormComponent } from "../form/form.component";


@NgModule({
  declarations: [
    FestivalsComponent,
    FestivalComponent,
    FormComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  exports: [
    FestivalsComponent,
    FestivalComponent,
    FormComponent
  ]
})
export class FestivalsModule {}
