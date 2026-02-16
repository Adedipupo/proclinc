# Providence Clinic Website - Complete Setup Guide

## Quick Start Guide

### Step 1: Prerequisites
Make sure you have the following installed:
- Node.js (version 18 or higher) - Download from https://nodejs.org/
- A code editor (VS Code recommended) - Download from https://code.visualstudio.com/

### Step 2: Extract and Navigate
1. Extract the providence-clinic folder to your desired location
2. Open Terminal (Mac/Linux) or Command Prompt (Windows)
3. Navigate to the folder:
   ```bash
   cd path/to/providence-clinic
   ```

### Step 3: Install Dependencies
Run this command to install all required packages:
```bash
npm install
```

This will take a few minutes. You'll see a progress bar.

### Step 4: Start the Development Server
```bash
npm run dev
```

### Step 5: View Your Website
Open your browser and go to: http://localhost:3000

You should see the Providence Clinic website running!

## Making Changes

### Changing Clinic Information

#### 1. Update Contact Details
Edit these files to change contact information:

**Footer** (`components/Footer.tsx`):
- Line 62: Change address
- Line 66-68: Change phone numbers
- Line 73-75: Change email addresses

**Contact Page** (`app/contact/page.tsx`):
- Lines 77-81: Change address
- Lines 91-95: Change phone numbers
- Lines 105-109: Change email addresses

#### 2. Update Clinic Name
The clinic name "PROVIDENCE CLINIC" appears in:
- `components/Navbar.tsx` (line 34)
- `components/Footer.tsx` (line 22)
- `app/layout.tsx` (line 10-11) - Update metadata

#### 3. Change Colors
Edit `tailwind.config.js` to change the primary color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',  // Lightest shade
    100: '#e0f2fe',
    // ... change these hex values
    900: '#0c4a6e', // Darkest shade
  }
}
```

#### 4. Add or Modify Services
Edit `app/services/page.tsx`:
- Lines 5-55: Main services with descriptions
- Lines 95-106: Additional services list

#### 5. Change Operating Hours
Edit `app/services/page.tsx` (lines 115-133)

### Adding Images

1. Create a folder: `public/images/`
2. Add your images to this folder
3. Use them in your code:

```tsx
import Image from 'next/image'

<Image 
  src="/images/clinic-photo.jpg" 
  alt="Providence Clinic"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Adding Google Maps

Replace the map placeholder in `app/contact/page.tsx` (around line 226):

1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder div with your iframe

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment Options

### Option 1: Vercel (Easiest - Free)

1. Create account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts

Your site will be live at: https://your-project.vercel.app

### Option 2: Netlify (Free)

1. Create account at https://netlify.com
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Option 3: Traditional Hosting

1. Build the project:
   ```bash
   npm run build
   ```
2. Install a production server:
   ```bash
   npm install -g serve
   ```
3. Run the production server:
   ```bash
   npm start
   ```

## Common Issues & Solutions

### Issue: "npm command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution**: 
- Option 1: Kill the process using port 3000
- Option 2: Use a different port:
  ```bash
  npm run dev -- -p 3001
  ```

### Issue: Changes not reflecting
**Solution**: 
1. Stop the server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

### Issue: Styling looks broken
**Solution**: Make sure Tailwind CSS processed correctly:
```bash
npm run build
```

## Customization Checklist

- [ ] Update clinic name in all files
- [ ] Change contact information (email, phone, address)
- [ ] Update services list
- [ ] Change operating hours
- [ ] Add clinic photos
- [ ] Add Google Maps location
- [ ] Change color scheme (optional)
- [ ] Add social media links
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Build for production
- [ ] Deploy to hosting

## File Structure Reference

```
providence-clinic/
├── app/                      # Application pages
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Site layout wrapper
│   └── page.tsx             # Homepage
├── components/              # Reusable components
│   ├── Navbar.tsx          # Top navigation
│   └── Footer.tsx          # Bottom footer
├── public/                  # Static files (images, etc.)
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config
└── next.config.js           # Next.js configuration
```

## Getting Help

If you encounter issues:

1. Check the error message in the terminal
2. Search for the error on Google
3. Check Next.js documentation: https://nextjs.org/docs
4. Check Tailwind CSS docs: https://tailwindcss.com/docs

## Next Steps

1. Customize the content
2. Add your clinic photos
3. Test on different devices
4. Get feedback from colleagues
5. Deploy to production

Good luck with your Providence Clinic website! 🏥
