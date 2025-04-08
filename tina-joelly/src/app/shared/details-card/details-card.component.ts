import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  imports: [NgStyle],
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss', '../../../styles.scss'],
})
export class DetailsCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() width: string = '100%';
}
