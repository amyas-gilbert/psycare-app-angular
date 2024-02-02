import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivalComponent } from './festivals/festival/festival.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { FestivalsService } from './festivals/festivals.service';

@NgModule({
  declarations: [
    AppComponent,
    FestivalsComponent,
    FestivalComponent,
    HeaderComponent,
    ResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
