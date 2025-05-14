import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-demo-button',
    imports: [CommonModule],
    templateUrl: './project-demo-button.component.html',
    styleUrl: './project-demo-button.component.scss'
})
export class ProjectDemoButtonComponent {
  @Input() title: string = 'Placeholder';
  @Input() onClick: () => void = () => {};
}
