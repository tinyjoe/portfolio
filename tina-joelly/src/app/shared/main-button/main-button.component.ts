import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
})
export class MainButtonComponent {
  @Input() title: string = 'Placeholder';
  @Input() onClick: () => void = () => {};
  @Input() buttonWidth = '120px';
}
