import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  from_name: string;
  from_email: string;
  phone?: string;
  service?: string;
  subject?: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // TODO: Replace these with your actual EmailJS credentials
  // Get these from your EmailJS dashboard after setting up:
  // 1. Service ID from Email Services
  // 2. Template ID from Email Templates
  // 3. Public Key from Account → General
  private readonly EMAILJS_SERVICE_ID = 'service_eu3mpk4';
  private readonly EMAILJS_TEMPLATE_ID = 'template_xx8813f';
  private readonly EMAILJS_PUBLIC_KEY = 'NdZgTj9RIbFiiUGyu';

  constructor() {
    // EmailJS will be initialized when sending emails
  }

  /**
   * Sends a contact form email via EmailJS
   * @param formData The contact form data
   * @returns Promise with success status and message
   */
  async sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'Not specified',
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message
      };

      // Initialize EmailJS if not already initialized
      emailjs.init(this.EMAILJS_PUBLIC_KEY);

      // Send email via EmailJS
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        };
      } else {
        return {
          success: false,
          message: 'Failed to send message. Please try again later.'
        };
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: error.text || 'Failed to send message. Please try again later.'
      };
    }
  }

  /**
   * Future method for Laravel backend integration
   * This can be used when switching from EmailJS to Laravel API
   */
  async sendContactEmailViaAPI(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    // This is a placeholder for future Laravel backend integration
    // Uncomment and modify when ready to switch to Laravel API
    
    /*
    try {
      const response = await this.http.post<{ success: boolean; message: string }>(
        '/api/contact',
        formData
      ).toPromise();
      return response || { success: false, message: 'Unknown error' };
    } catch (error) {
      return { success: false, message: 'Failed to send message' };
    }
    */
    
    return { success: false, message: 'API integration not yet implemented' };
  }
}
