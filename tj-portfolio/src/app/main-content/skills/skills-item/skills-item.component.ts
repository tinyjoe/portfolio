import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.scss',
})
export class SkillsItemComponent {
  @Input() iconUrl: string = '';
  @Input() title: string = '';
}
