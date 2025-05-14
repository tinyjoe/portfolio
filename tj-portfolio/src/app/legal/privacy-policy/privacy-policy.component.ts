import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-privacy-policy',
    imports: [CommonModule, TranslateModule],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  navigateBack() {
    document.location.href = '';
  }
}
