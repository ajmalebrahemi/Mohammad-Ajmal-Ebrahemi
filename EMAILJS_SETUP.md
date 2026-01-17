# EmailJS Setup Instructions

This document explains how to set up EmailJS for the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set the **To Email** field to: `mohammadajmalebrahemi2024@gmail.com`
4. Use the following template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Reinblick website contact form.
```

5. Save the template and copy your **Template ID**

**Important:** Make sure to set the recipient email to `mohammadajmalebrahemi2024@gmail.com` in the template settings.

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Configuration

Open `src/app/services/email.service.ts` and replace:

```typescript
private readonly EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
private readonly EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
private readonly EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

With your actual credentials:

```typescript
private readonly EMAILJS_SERVICE_ID = 'service_xxxxxxx';
private readonly EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
private readonly EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx';
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox

## Security Notes

- The Public Key is safe to expose in frontend code
- Never expose your Private Key
- Consider rate limiting for production
- For higher volume, upgrade to a paid plan

## Future Backend Integration

When you're ready to switch to Laravel backend:

1. The `EmailService` can be easily replaced
2. Update `sendContactEmail()` to call your Laravel API
3. The form component doesn't need to change
4. All validation and error handling remains the same

Example Laravel integration:

```typescript
async sendContactEmailViaAPI(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await this.http.post<{ success: boolean; message: string }>(
      '/api/contact',
      formData
    ).toPromise();
    return response || { success: false, message: 'Unknown error' };
  } catch (error) {
    return { success: false, message: 'Failed to send message' };
  }
}
```
