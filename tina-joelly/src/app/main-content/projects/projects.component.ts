import { Component } from '@angular/core';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectListItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
