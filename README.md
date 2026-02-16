# Providence Clinic Website

A modern, responsive website for Providence Clinic built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 and App Router
- 🎨 Styled with Tailwind CSS
- 📝 TypeScript for type safety
- 🔍 SEO optimized
- ♿ Accessible design

## Pages

1. **Home Page** - Hero section, why choose us, services overview, and call-to-action
2. **Services Page** - Detailed medical services with descriptions
3. **Contact Page** - Contact form, location info, and contact details

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd providence-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
providence-clinic/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

Edit the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color values
  }
}
```

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Services

Modify services in `app/services/page.tsx` to match your clinic's offerings.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

You can deploy to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding Images

To add clinic photos:

1. Place images in the `public/` folder
2. Import and use in components:

```tsx
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Description" 
  width={600} 
  height={400} 
/>
```

## Adding Google Maps

To add an interactive map to the contact page:

1. Get a Google Maps API key
2. Replace the map placeholder in `app/contact/page.tsx` with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>
```

## Support

For questions or issues, contact:
- Email: hr@providenceclinic.com.ng
- Website: [providenceclinic.com.ng](https://providenceclinic.com.ng)

## License

© 2024 Providence Clinic. All rights reserved.
