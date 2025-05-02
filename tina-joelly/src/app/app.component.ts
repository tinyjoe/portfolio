import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/fonts/fonts.scss'],
})
export class AppComponent {
  title = 'tina-joelly';

  constructor(private translate: TranslateService) {
    const lang =
      typeof window !== 'undefined'
        ? localStorage.getItem('app-language') || 'en'
        : 'en';
    translate.setDefaultLang('en');
    translate.use(lang);
  }
}
