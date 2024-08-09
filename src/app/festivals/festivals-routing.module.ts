import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FestivalsComponent } from "./festivals.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  // {
  //   path: 'festivals',
  //   component: FestivalsComponent,
  //   canActivate: [AuthGuard]
  // },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FestivalsRoutingModule {}
