import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { TestimonialCarouselComponent } from './testimonial-carousel/testimonial-carousel.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-references',
    imports: [CommonModule, TestimonialCarouselComponent, TranslateModule],
    templateUrl: './references.component.html',
    styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = inject(PortfolioDataService);
  currentIndex = 0;
}
