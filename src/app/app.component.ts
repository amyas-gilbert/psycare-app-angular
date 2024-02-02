import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'psycare-app-angular';
  loadedFeature = 'home';

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }
}
