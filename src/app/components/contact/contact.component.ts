import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService, ContactFormData } from '../../services/email.service';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactSection') contactSection!: ElementRef;
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private scrollAnimationService: ScrollAnimationService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: [''],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      this.submitSuccess = false;
      this.errorMessage = '';

      try {
        // Prepare form data for EmailJS
        const formData: ContactFormData = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          phone: this.contactForm.value.phone || undefined,
          service: this.contactForm.value.service || undefined,
          subject: this.contactForm.value.subject || undefined,
          message: this.contactForm.value.message
        };

        // Send email via EmailJS
        const result = await this.emailService.sendContactEmail(formData);

        if (result.success) {
          this.submitSuccess = true;
          this.contactForm.reset();

          // Reset success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        } else {
          this.submitError = true;
          this.errorMessage = result.message;
        }
      } catch (error) {
        console.error('Form submission error:', error);
        this.submitError = true;
        this.errorMessage = 'An unexpected error occurred. Please try again later.';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get phoneControl() {
    return this.contactForm.get('phone');
  }

  get serviceControl() {
    return this.contactForm.get('service');
  }

  get subjectControl() {
    return this.contactForm.get('subject');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  ngAfterViewInit(): void {
    if (this.contactSection) {
      const elements = this.contactSection.nativeElement.querySelectorAll('.animate-on-scroll');
      this.scrollAnimationService.observeElements(elements);
    }
  }
}

