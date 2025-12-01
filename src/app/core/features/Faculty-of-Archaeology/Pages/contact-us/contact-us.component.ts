import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulate form submission
    setTimeout(() => {
      this.submitMessage = 'Thank you for your message! We will get back to you soon.';
      this.isSubmitting = false;
      this.resetForm();
    }, 2000);
  }

  resetForm(): void {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  isFormValid(): boolean {
    return this.contactData.name.trim() !== '' &&
           this.contactData.email.trim() !== '' &&
           this.contactData.subject.trim() !== '' &&
           this.contactData.message.trim() !== '';
  }
}