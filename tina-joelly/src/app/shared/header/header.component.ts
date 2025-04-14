import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, HeaderLinkComponent, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../styles.scss'],
})
export class HeaderComponent {}
