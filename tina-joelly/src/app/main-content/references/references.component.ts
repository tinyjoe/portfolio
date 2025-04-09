import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../model/portfolio-data.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = inject(PortfolioDataService);
}
