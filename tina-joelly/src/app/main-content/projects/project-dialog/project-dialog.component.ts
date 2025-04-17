import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectDemoButtonComponent } from '../project-demo-button/project-demo-button.component';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, ProjectDemoButtonComponent],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss',
})
export class ProjectDialogComponent {
  currentIndex: number;
  projects: any[];
  project: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProjectDialogComponent>
  ) {
    this.projects = data.projects;
    this.currentIndex = data.currentIndex;
    this.project = this.projects[this.currentIndex];
  }

  closeProjectDialog(): void {
    this.dialogRef.close();
  }

  nextProject(): void {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.project = this.projects[this.currentIndex];
  }

  getFormattedProjectNumber(): string {
    return (this.currentIndex + 1).toString().padStart(2, '0');
  }

  goToGitHub(): void {
    if (this.project.gitHubUrl) {
      window.open(this.project.gitHubUrl, '_blank');
    }
  }

  showLiveDemo(): void {
    if (this.project.liveUrl) {
      window.open(this.project.liveUrl, '_blank');
    }
  }
}
