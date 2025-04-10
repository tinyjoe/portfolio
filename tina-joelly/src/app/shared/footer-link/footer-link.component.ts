import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  imports: [CommonModule],
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.scss',
})
export class FooterLinkComponent {
  @Input() title: string = '';
  @Input() url: string = '';
}
