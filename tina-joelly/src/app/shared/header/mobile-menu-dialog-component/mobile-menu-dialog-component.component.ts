import { Component } from '@angular/core';
import { HeaderLinkComponent } from '../header-link/header-link.component';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-menu-dialog-component',
  imports: [
    CommonModule,
    HeaderLinkComponent,
    LanguageSwitchComponent,
    TranslateModule,
  ],
  templateUrl: './mobile-menu-dialog-component.component.html',
  styleUrl: './mobile-menu-dialog-component.component.scss',
})
export class MobileMenuDialogComponentComponent {}
