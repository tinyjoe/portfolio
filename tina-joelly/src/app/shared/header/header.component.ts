import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../styles.scss'],
})
export class HeaderComponent {}
