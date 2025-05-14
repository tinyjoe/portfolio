import { Component, inject } from '@angular/core';
import { DetailsCardComponent } from '../../shared/details-card/details-card.component';
import { SkillsItemComponent } from './skills-item/skills-item.component';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { MainButtonComponent } from '../../shared/main-button/main-button.component';
import { CommonModule } from '@angular/common';
import { GrowthMindsetItemComponent } from './growth-mindset-item/growth-mindset-item.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    imports: [
        CommonModule,
        DetailsCardComponent,
        SkillsItemComponent,
        MainButtonComponent,
        GrowthMindsetItemComponent,
        TranslateModule,
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = inject(PortfolioDataService);

  navigateToContactForm() {
    document.location.href = '#contact';
  }
}
