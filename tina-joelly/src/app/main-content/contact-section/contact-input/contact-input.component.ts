import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-input.component.html',
  styleUrl: './contact-input.component.scss',
})
export class ContactInputComponent {
  @Input() model: any;
  @Input() required: boolean = false;
  @Input() labelFor: string = '';
  @Input() label: string = '';
  @Input() inputId: string = '';
  @Input() inputName: string = '';
  @Input() placeholder: string = '';
  @Input() regExPattern: string = '';
  @Input() errorMessage: string = '';
  @Input() showErrors: boolean = false;
  @Input() value: string = '';
}
