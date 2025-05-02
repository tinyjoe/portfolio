import { Component } from '@angular/core';
import { HeaderLinkComponent } from '../header-link/header-link.component';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu-dialog-component',
  imports: [CommonModule, HeaderLinkComponent, LanguageSwitchComponent],
  templateUrl: './mobile-menu-dialog-component.component.html',
  styleUrl: './mobile-menu-dialog-component.component.scss',
})
export class MobileMenuDialogComponentComponent {}
