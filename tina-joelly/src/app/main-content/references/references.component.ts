import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { TestimonialCarouselComponent } from './testimonial-carousel/testimonial-carousel.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TestimonialCarouselComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = inject(PortfolioDataService);
  currentIndex = 0;
}
