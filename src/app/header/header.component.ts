import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() loadedFeature = new EventEmitter<string>()

  onSelect(feature: string) {
    this.loadedFeature.emit(feature)
  }
}
