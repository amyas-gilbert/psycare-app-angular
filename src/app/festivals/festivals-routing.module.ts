import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FestivalsComponent } from "./festivals.component";
import { FestivalComponent } from "./festival/festival.component";
import { AuthGuard } from "../auth/auth.guard";
import { FestivalsService } from "./festivals.service";

const routes: Routes = [
  {
    path: '',
    component: FestivalsComponent,
    // canActivate: [AuthGuard]
        // this is stopping navigation here when logging in...
  },
  { path: ':name', component: FestivalComponent },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [FestivalsService]
})
export class FestivalsRoutingModule {}
