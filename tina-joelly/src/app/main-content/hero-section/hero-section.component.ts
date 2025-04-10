import { Component } from '@angular/core';
import { MainButtonComponent } from '../../shared/main-button/main-button.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';

@Component({
  selector: 'app-hero-section',
  imports: [MainButtonComponent, HeroBannerComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  navigateToWork() {
    console.log('Work button clicked');
  }

  navigateToContactForm() {
    console.log('Contact button clicked');
  }
}
