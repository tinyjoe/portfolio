import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../model/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero-banner',
    imports: [CommonModule],
    templateUrl: './hero-banner.component.html',
    styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  bannerTitles = inject(PortfolioDataService);
}
