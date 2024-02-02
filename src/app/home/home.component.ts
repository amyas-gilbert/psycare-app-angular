import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  onNavigate() {
    this.router.navigate(['festivals'])
  }

  onNavigateProgrammatically() {
    this.router.navigate(['festivals'], {relativeTo: this.route});
    // relativeTo is redundant here because the path to this component is the same as the root,
    // which is the default path for relativeTo, but you get the idea
  }
}
