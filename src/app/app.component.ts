import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('AppComponent initialized');
    this.authService.autoLogin();
  }

  ngOnDestroy() {

  }
}
