import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);
  translate = inject(TranslateService);

  get namePlaceholder(): string {
    if (this.showErrors && !this.contactData.name) {
      return this.translate.instant('form.name-error');
    } else {
      return this.translate.instant('form.name-help');
    }
  }

  get mailPlaceholder(): string {
    if (this.showErrors && !this.contactData.email) {
      return this.translate.instant('form.mail-error');
    } else if (this.showErrors && this.contactData.email && this.emailInvalid) {
      return this.translate.instant('form.mail-invalid');
    } else {
      return this.translate.instant('form.mail-help');
    }
  }

  get messagePlaceholder(): string {
    if (this.showErrors && !this.contactData.message) {
      return this.translate.instant('form.message-error');
    } else {
      return this.translate.instant('form.message-help');
    }
  }

  get emailInvalid(): boolean {
    const pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return !pattern.test(this.contactData.email);
  }

  get formEmpty(): boolean {
    return (
      this.contactData.name == '' &&
      this.contactData.email == '' &&
      this.contactData.message == '' &&
      this.contactData.acceptedPolicy == false
    );
  }

  get formValid(): boolean {
    return (
      this.contactData.name != '' &&
      this.contactData.email != '' &&
      this.contactData.message != '' &&
      this.contactData.acceptedPolicy &&
      !this.emailInvalid
    );
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    acceptedPolicy: false,
  };

  mailTest = false;
  showErrors = false;
  showSuccessMessage = false;

  post = {
    endPoint: 'https://tina-joelly.at/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.showErrors = true;
    if (ngForm.valid && !this.mailTest && !this.emailInvalid) {
      this.httpSubmit(ngForm);
    } else if (ngForm.valid && this.mailTest && !this.emailInvalid) {
      this.showSuccessMessage = true;
      ngForm.resetForm();
      this.showErrors = false;
    } else {
      this.showErrors = true;
    }
  }

  private httpSubmit(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: () => {
          ngForm.resetForm();
          this.showErrors = false;
        },
        error: (error) => console.error(error),
        complete: () => (this.showSuccessMessage = true),
      });
  }
}
