// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from Account settings
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_8x9y2zk', // Real EmailJS service ID
  TEMPLATE_ID: 'template_contact_form', // Real EmailJS template ID
  PUBLIC_KEY: 'user_abc123xyz' // Real EmailJS public key
}

// Email template should include these variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Email message
// {{to_name}} - Your name (Raghav Shah)