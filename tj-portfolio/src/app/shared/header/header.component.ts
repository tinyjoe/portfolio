import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { MobileMenuDialogComponentComponent } from './mobile-menu-dialog-component/mobile-menu-dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    MatSlideToggleModule,
    HeaderLinkComponent,
    LanguageSwitchComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../styles.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  openMobileMenuDialog(): void {
    this.dialog.open(MobileMenuDialogComponentComponent, {
      width: '180px',
      maxWidth: '200px',
      position: {
        top: '20',
        right: '20',
      },
      panelClass: 'menu-dialog-container',
    });
  }
}
