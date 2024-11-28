import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeroComponent, FlashSalesComponent, CommonModule, CategoriesComponent, BestSellingComponent, BannerComponent]
})
export class HomeComponent {

}
