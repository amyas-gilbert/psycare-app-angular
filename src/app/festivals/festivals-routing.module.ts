import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FestivalsComponent } from "./festivals.component";
import { FestivalComponent } from "./festival/festival.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: FestivalsComponent,
    // canActivate: [AuthGuard]
  },
  { path: ':name', component: FestivalComponent },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FestivalsRoutingModule {}
