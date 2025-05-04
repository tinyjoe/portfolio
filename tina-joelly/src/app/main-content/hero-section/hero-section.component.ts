import { Component } from '@angular/core';
import { MainButtonComponent } from '../../shared/main-button/main-button.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [MainButtonComponent, HeroBannerComponent, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  navigateToWork() {
    document.location.href = '#projects';
  }

  navigateToContactForm() {
    document.location.href = '#contact';
  }
}
