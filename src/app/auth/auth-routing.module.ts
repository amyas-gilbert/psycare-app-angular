import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthComponent} from "./auth.component";
import { AuthGuard } from "../auth/auth.guard";
import { AuthService } from "./auth.service";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    // canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  // providers: [AuthService]
})
export class AuthRoutingModule {}
