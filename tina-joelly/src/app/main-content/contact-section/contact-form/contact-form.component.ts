import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactInputComponent } from '../contact-input/contact-input.component';
import { MainButtonComponent } from '../../../shared/main-button/main-button.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    ContactInputComponent,
    MainButtonComponent,
    TranslateModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };
}
