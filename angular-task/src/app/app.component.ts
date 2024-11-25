import { Component } from '@angular/core';
import { LayoutComponent } from './shared/layout/layout.component';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthLayoutComponent } from './shared/auth-layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, LayoutComponent, AuthLayoutComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() { }


}
