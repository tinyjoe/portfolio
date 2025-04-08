import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  imports: [],
  templateUrl: './skills-item.component.html',
  styleUrl: './skills-item.component.scss',
})
export class SkillsItemComponent {
  @Input() iconUrl: string = '';
  @Input() title: string = '';
}
