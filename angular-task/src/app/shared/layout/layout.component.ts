import { Component } from '@angular/core';

import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutComponent {
  showHeaderAndFooter: boolean = true;  // Default to show Header and Footer

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderAndFooter = event.url !== '/login';
      }
    });
  }
}
