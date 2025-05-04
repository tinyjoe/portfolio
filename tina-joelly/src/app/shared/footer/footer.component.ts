import { Component } from '@angular/core';
import { FooterLinkComponent } from './footer-link/footer-link.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [FooterLinkComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
