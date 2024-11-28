import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'flash-sales',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './flash-sales.component.html',
})
export class FlashSalesComponent {
  isFavorite = false;
  faHeart = faHeart;  // Set the icon to be used
  faEye = faEye
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
