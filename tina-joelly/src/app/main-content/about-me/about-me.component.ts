import { Component, inject } from '@angular/core';
import { DetailsCardComponent } from '../../shared/details-card/details-card.component';
import { DetailIconItemComponent } from '../../shared/detail-icon-item/detail-icon-item.component';
import { PortfolioDataService } from '../../model/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, DetailsCardComponent, DetailIconItemComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../../../styles.scss'],
})
export class AboutMeComponent {
  myDetailsData = inject(PortfolioDataService);
}
