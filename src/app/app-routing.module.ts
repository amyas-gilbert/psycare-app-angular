import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FestivalsComponent } from "./festivals/festivals.component";
import { AuthGuard } from "./auth/auth.guard";
import { FestivalComponent } from "./festivals/festival/festival.component";
import { ResourcesComponent } from "./resources/resources.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'festivals', loadChildren: () => import ('./festivals/festivals.module').then(m => m.FestivalsModule)},
      // loadChildren means: only load this path when a user tries to go there

  { path: 'festivals', component: FestivalsComponent },
  { path: 'festivals/:name', component: FestivalComponent },
  { path: 'resources', component: ResourcesComponent},
  { path: 'auth', component: AuthComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
