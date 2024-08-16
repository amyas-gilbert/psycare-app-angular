import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './shared/alert/alert.component';
import { AppComponent } from './app.component';
// import { FestivalsComponent } from './festivals/festivals.component';
import { FestivalComponent } from './festivals/festival/festival.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
// import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { GuestsComponent } from './guests/guests.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
// import { AuthGuard } from "./auth/auth.guard";
import { PlaceholderDirective } from "./shared/placeholder/placeholder.component";
import { FestivalsModule } from "./festivals/festivals.module";
import { AuthModule } from "./auth/auth.module";



@NgModule({
  declarations: [
    // AlertComponent,
    AppComponent,
    // FestivalsComponent,
    // FestivalComponent,
    HeaderComponent,
    ResourcesComponent,
    HomeComponent,
    // GuestsComponent,
    // FormComponent,
    ReversePipe,
    // AuthComponent,
    // LoadingSpinnerComponent,
    // PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FestivalsModule,
    AuthModule
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
