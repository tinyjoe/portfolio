import { Component, inject } from '@angular/core';
import { DetailsCardComponent } from '../../shared/details-card/details-card.component';
import { DetailIconItemComponent } from './detail-icon-item/detail-icon-item.component';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    DetailsCardComponent,
    DetailIconItemComponent,
    TranslateModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../../../styles.scss'],
})
export class AboutMeComponent {
  myDetailsData = inject(PortfolioDataService);
}
