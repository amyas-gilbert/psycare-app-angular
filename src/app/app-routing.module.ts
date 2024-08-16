import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ResourcesComponent } from "./resources/resources.component";
// import { AuthComponent } from "./auth/auth.component";
import { FestivalsService } from "./festivals/festivals.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},

  // { path: 'festivals', component: FestivalsComponent },
  // { path: 'festivals/:name', component: FestivalComponent },

  { path: 'festivals', loadChildren: () => import ('./festivals/festivals.module').then(m => m.FestivalsModule)},
  // loadChildren means: only load this path when a user tries to go there

  // {
  //   path: 'festivals',
  //   component: FestivalsComponent,
  //   children: [
  //     { path: ':name',
  //       component: FestivalComponent,
  //     }
  //   ]
  // }, this nested route works with <router-outlet> in the tpl

  { path: 'resources', component: ResourcesComponent},
  // { path: 'auth', component: AuthComponent }
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  // providers: [FestivalsService]
})
export class AppRoutingModule {
}
