import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-icon-item',
  standalone: true,
  imports: [],
  templateUrl: './detail-icon-item.component.html',
  styleUrl: './detail-icon-item.component.scss',
})
export class DetailIconItemComponent {
  @Input() iconUrl: string = '';
  @Input() description: string = '';
}
