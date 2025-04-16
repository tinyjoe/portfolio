import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent {
  language: 'EN' | 'DE' = 'EN';

  toggleLanguage() {
    this.language = this.language === 'EN' ? 'DE' : 'EN';
  }
}
