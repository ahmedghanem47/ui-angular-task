import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'best-selling',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './best-selling.component.html',
})
export class BestSellingComponent {
  isFavorite = false;
  faHeart = faHeart;  // Set the icon to be used
  faEye = faEye
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
