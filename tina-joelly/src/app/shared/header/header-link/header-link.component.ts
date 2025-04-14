import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-link',
  imports: [],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.scss',
})
export class HeaderLinkComponent {
  @Input() title: string = '';
  @Input() url: string = '';
}
