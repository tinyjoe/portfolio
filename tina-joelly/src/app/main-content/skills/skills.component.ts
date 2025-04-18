import { Component, inject } from '@angular/core';
import { DetailsCardComponent } from '../../shared/details-card/details-card.component';
import { SkillsItemComponent } from '../../shared/skills-item/skills-item.component';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { MainButtonComponent } from '../../shared/main-button/main-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    DetailsCardComponent,
    SkillsItemComponent,
    MainButtonComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = inject(PortfolioDataService);
}
