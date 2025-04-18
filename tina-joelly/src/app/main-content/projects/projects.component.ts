import { Component, inject } from '@angular/core';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectListItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = inject(PortfolioDataService);
}
