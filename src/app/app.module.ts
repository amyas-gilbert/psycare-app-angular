import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivalComponent } from './festivals/festival/festival.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestsComponent } from './guests/guests.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'festivals', component: FestivalsComponent},
  { path: 'festivals/:name', component: FestivalComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'auth', component: AuthComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FestivalsComponent,
    FestivalComponent,
    HeaderComponent,
    ResourcesComponent,
    HomeComponent,
    GuestsComponent,
    FormComponent,
    ReversePipe,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
