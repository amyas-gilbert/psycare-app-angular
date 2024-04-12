import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivalComponent } from './festivals/festival/festival.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { FestivalsService } from './festivals/festivals.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestsComponent } from './guests/guests.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'festivals', component: FestivalsComponent},
  { path: 'resources', component: ResourcesComponent}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
