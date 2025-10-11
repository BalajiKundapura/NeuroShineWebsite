# NeuroShine Website

A modern, accessible website for NeuroShine - a non-profit dedicated to helping neurodivergent children through volunteering and app development.

## Features

- **Homepage**: Engaging hero section with mission statement and call-to-actions
- **About Page**: Team profiles, mission, vision, and organizational story
- **Products Page**: Showcase of 12 accessible apps with descriptions and stats
- **Chapters Page**: Interactive map showing 25 chapters nationwide
- **Calendar**: Event calendar with admin controls for managing events
- **Forms**: Volunteer sign-up and chapter creation forms with email integration
- **Donate Page**: GoFundMe integration and donation information

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **TypeScript**: Full type safety
- **Deployment**: Optimized for Vercel

## Getting Started

### Installation

1. Clone or download this repository
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

For production deployment, you'll need to set up:

\`\`\`env
# Email Integration (see EMAIL_SETUP.md)
ADMIN_EMAIL=your-email@neuroshine.org
RESEND_API_KEY=your-api-key-here

# Optional: Custom domain
NEXT_PUBLIC_SITE_URL=https://neuroshine.org
\`\`\`

## Customization

### Colors

The site uses a light blue and yellow color scheme. To customize:

1. Edit `app/globals.css`
2. Modify the color variables in the `@theme inline` section
3. Update `--color-primary` (light blue) and `--color-secondary` (light yellow)

### Content

- **Team Members**: Edit `app/about/page.tsx` - update the `teamMembers` array
- **Apps**: Edit `app/products/page.tsx` - update the `apps` array
- **Chapters**: Edit `app/chapters/page.tsx` - update the `chapters` array
- **Events**: Events are managed through the calendar admin interface

### GoFundMe Integration

See `GOFUNDME_INTEGRATION.md` for detailed instructions on integrating your GoFundMe campaign.

### Email Setup

See `EMAIL_SETUP.md` for instructions on setting up email notifications for form submissions.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

Alternatively, use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Admin Features

### Calendar Admin

- Password: `admin123` (change this in production!)
- Access admin mode from the calendar page
- Add, edit, and delete events
- In production, implement proper authentication

## Project Structure

\`\`\`
neuroshine-website/
├── app/
│   ├── about/          # About page
│   ├── calendar/       # Events calendar
│   ├── chapters/       # Chapters with map
│   ├── create-chapter/ # Chapter application form
│   ├── donate/         # Donation page
│   ├── products/       # Apps showcase
│   ├── signup/         # Volunteer sign-up
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── navigation.tsx  # Main navigation
│   ├── footer.tsx      # Site footer
│   └── ...             # Other components
└── public/             # Static assets
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This site is built with accessibility in mind:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## License

This project is open source and available for use by NeuroShine.

## Support

For questions or issues:
- Email: info@neuroshine.org
- GitHub Issues: [Create an issue]

## Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for neurodivergent children
\`\`\`
