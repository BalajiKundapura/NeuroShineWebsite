# GoFundMe Integration Guide

This guide explains how to integrate your GoFundMe campaign into the NeuroShine donate page.

## Option 1: Direct Link (Current Implementation)

The simplest approach is to link directly to your GoFundMe campaign:

1. Create your campaign at https://www.gofundme.com
2. Copy your campaign URL
3. Update the link in `app/donate/page.tsx`:

\`\`\`tsx
<a href="YOUR_GOFUNDME_URL_HERE" target="_blank" rel="noopener noreferrer">
  Donate on GoFundMe
</a>
\`\`\`

## Option 2: Embed GoFundMe Widget

For a more integrated experience, embed the GoFundMe widget directly on your page:

### Steps:

1. Go to your GoFundMe campaign page
2. Click the "Share" button
3. Select "Embed" from the options
4. Choose your preferred widget size (Small, Medium, or Large)
5. Copy the provided embed code

### Implementation:

Replace the placeholder section in `app/donate/page.tsx` with the embed code:

\`\`\`tsx
<div className="w-full max-w-2xl mx-auto">
  <iframe 
    src="https://www.gofundme.com/f/your-campaign-name/widget/large"
    width="100%"
    height="720px"
    frameBorder="0"
    scrolling="no"
    className="rounded-xl"
  />
</div>
\`\`\`

## Option 3: GoFundMe API (Advanced)

For more control, you can use the GoFundMe API:

1. Contact GoFundMe to get API access
2. Implement server-side API calls to fetch campaign data
3. Display custom donation interface with real-time updates

### Example API Integration:

\`\`\`typescript
// app/api/campaign-stats/route.ts
export async function GET() {
  const response = await fetch('https://api.gofundme.com/v1/campaigns/YOUR_CAMPAIGN_ID', {
    headers: {
      'Authorization': `Bearer ${process.env.GOFUNDME_API_KEY}`
    }
  })
  
  const data = await response.json()
  return Response.json(data)
}
\`\`\`

## Customization Tips

### Styling the Widget

If using the embed widget, you can wrap it in a styled container:

\`\`\`tsx
<div className="relative rounded-xl overflow-hidden border-2 border-border shadow-lg">
  {/* GoFundMe iframe here */}
</div>
\`\`\`

### Adding Campaign Stats

Display live campaign statistics:

\`\`\`tsx
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="text-center">
    <p className="text-3xl font-bold text-primary">$XX,XXX</p>
    <p className="text-sm text-muted-foreground">Raised</p>
  </div>
  <div className="text-center">
    <p className="text-3xl font-bold text-primary">XXX</p>
    <p className="text-sm text-muted-foreground">Donors</p>
  </div>
  <div className="text-center">
    <p className="text-3xl font-bold text-secondary-foreground">XX%</p>
    <p className="text-sm text-muted-foreground">of Goal</p>
  </div>
</div>
\`\`\`

## Testing

Before going live:

1. Test the donation flow on desktop and mobile
2. Verify the campaign URL is correct
3. Ensure the widget displays properly on all screen sizes
4. Test that donations are being tracked correctly

## Support

For GoFundMe-specific questions:
- Visit: https://support.gofundme.com
- Email: support@gofundme.com

For NeuroShine website questions:
- Check the main README.md
- Review the code comments in donate/page.tsx
\`\`\`
