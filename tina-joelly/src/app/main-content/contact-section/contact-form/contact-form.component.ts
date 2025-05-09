import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactInputComponent } from '../contact-input/contact-input.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule, ContactInputComponent, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    acceptedPolicy: false,
  };

  mailTest = true;
  showErrors = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  get emailInvalid(): boolean {
    const pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return !pattern.test(this.contactData.email);
  }

  onSubmit(ngForm: NgForm) {
    this.showErrors = true;

    if (ngForm.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => ngForm.resetForm(),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.valid && this.mailTest && !this.emailInvalid) {
      console.log('This is a test');
      ngForm.reset();
      ngForm.form.reset();
      this.showErrors = false;
    } else {
      console.log('Form ist ungültig!');
    }
  }
}
