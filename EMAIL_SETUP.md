# Email Integration Setup

This application includes form submission functionality that can be integrated with email services.

## Current Implementation

The forms (Sign Up and Create Chapter) currently:
- Collect user data through forms
- Send data to `/api/submit-form` endpoint
- Log submissions to console (for development)

## Production Email Setup

To enable email notifications in production, you can use any of these services:

### Option 1: Resend (Recommended for Vercel)
1. Sign up at https://resend.com
2. Install: `npm install resend`
3. Add to your API route:
\`\`\`typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'NeuroShine <onboarding@resend.dev>',
  to: process.env.ADMIN_EMAIL,
  subject: `New ${data.formType} Submission`,
  text: emailContent,
})
\`\`\`
4. Add environment variables:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`

### Option 2: SendGrid
1. Sign up at https://sendgrid.com
2. Install: `npm install @sendgrid/mail`
3. Configure with your API key

### Option 3: Nodemailer (SMTP)
1. Install: `npm install nodemailer`
2. Configure with your SMTP credentials

## Environment Variables Needed

Add these to your Vercel project or `.env.local`:

\`\`\`
ADMIN_EMAIL=your-email@neuroshine.org
RESEND_API_KEY=your-api-key-here
\`\`\`

## Testing

To test email functionality locally:
1. Set up a test email service account
2. Add credentials to `.env.local`
3. Submit a form and check your inbox
