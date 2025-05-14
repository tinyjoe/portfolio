import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-list-item',
  imports: [CommonModule],
  templateUrl: './project-list-item.component.html',
  styleUrl: './project-list-item.component.scss',
})
export class ProjectListItemComponent {
  @Input() project: any;
  @Input() index: number = 0;
  @Input()
  projectsList: any[] = [];

  constructor(private dialog: MatDialog) {}

  openProjectDialog(): void {
    this.dialog.open(ProjectDialogComponent, {
      data: { projects: this.projectsList, currentIndex: this.index },
      width: '90vw',
      maxWidth: '1280px',
      height: '90vh',
      maxHeight: '90vh',
      panelClass: 'project-dialog-container',
    });
  }
}
