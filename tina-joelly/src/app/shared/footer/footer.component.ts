import { Component } from '@angular/core';
import { FooterLinkComponent } from './footer-link/footer-link.component';

@Component({
  selector: 'app-footer',
  imports: [FooterLinkComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
