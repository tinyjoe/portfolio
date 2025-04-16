import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-input',
  imports: [CommonModule],
  templateUrl: './contact-input.component.html',
  styleUrl: './contact-input.component.scss',
})
export class ContactInputComponent {
  @Input() labelFor: string = '';
  @Input() label: string = '';
  @Input() inputId: string = '';
  @Input() inputName: string = '';
  @Input() placeholder: string = '';
  @Input() regExPattern: string = '';
}
