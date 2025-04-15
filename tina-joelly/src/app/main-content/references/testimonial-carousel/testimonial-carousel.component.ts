import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-carousel',
  imports: [CommonModule],
  templateUrl: './testimonial-carousel.component.html',
  styleUrl: './testimonial-carousel.component.scss',
})
export class TestimonialCarouselComponent {
  @Input() refQuotes: { name: string; role: string; quote: string }[] = [];
  @Input() currentIndex = 0;

  goTo(index: number) {
    this.currentIndex = index;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.refQuotes.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.refQuotes.length) % this.refQuotes.length;
  }

  getCardPositionClass(index: number): string {
    const total = this.refQuotes.length;
    if (index === this.currentIndex) return 'card active';
    if (index === (this.currentIndex - 1 + total) % total) return 'card left';
    if (index === (this.currentIndex + 1) % total) return 'card right';
    return 'card hidden';
  }
}
