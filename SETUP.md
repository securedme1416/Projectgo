# Moni Africa Next.js Application - Setup & Configuration Guide

## Project Overview

This is a complete rebuild of the Moni Africa loan service website from 6 static HTML pages into a modern, fully-featured Next.js 16 application with React 19 and Tailwind CSS 4.

## ✅ What's Included

### Pages (6 Pages Rebuilt)
1. **Home Page** - Main landing page with loan services overview
2. **Services Page** - Detailed service offerings and benefits
3. **Contact Page** - Contact form for customer inquiries
4. **Loan Application** - Full loan application form
5. **Email Verification** - Email verification and authentication
6. **Payment Gateway** - Secure payment processing page

### Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Consistent footer across all pages
- Fully typed with TypeScript

### Features
- ✓ Responsive design (mobile, tablet, desktop)
- ✓ Form handling and validation
- ✓ Image optimization
- ✓ SEO-friendly metadata
- ✓ Modern UI/UX with Tailwind CSS
- ✓ Client-side routing
- ✓ TypeScript support

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── loan-application/
│   │   └── page.tsx             # Loan application
│   ├── email-verification/
│   │   └── page.tsx             # Email verification
│   └── payment-gateway/
│       └── page.tsx             # Payment gateway
├── components/
│   ├── header.tsx               # Header navigation
│   └── footer.tsx               # Footer
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
└── README.md                    # Documentation
```

## 🎨 Design Details

### Color Scheme
- **Primary Blue**: #2563EB (Blue-600)
- **Primary Blue Hover**: #1D4ED8 (Blue-700)
- **Background**: White
- **Text**: Dark gray (#1F2937)
- **Borders**: Light gray (#E5E7EB)

### Typography
- **Font**: Geist (Default Next.js font)
- **Headings**: Bold, larger sizes
- **Body**: Regular weight, readable line-height

### Images
All images are loaded from the original Moni Africa domain:
- `https://lendig0.simdif.com/images/public/`

Images are optimized using Next.js Image component.

## 📋 Pages Description

### Home Page (`/`)
- Main landing page
- Call-to-action button "Apply Now"
- Multiple promotional images
- Overview of services

### Services Page (`/services`)
- Three main service images
- Benefits list with checkmarks
- Professional layout
- Service descriptions

### Contact Page (`/contact`)
- Contact form with fields:
  - Email (required)
  - Name (required)
  - Phone (optional)
  - Message (required)
- Form validation
- Success message on submission
- Contact information section

### Loan Application Page (`/loan-application`)
- Comprehensive application form
- Fields:
  - Email (required)
  - Full Name (required)
  - Contact Address
  - Address (required)
  - Sex (Male/Female)
  - Employment Status (dropdown)
  - Monthly Income
  - Purpose of Loan (dropdown)
- Form validation
- Success confirmation

### Email Verification Page (`/email-verification`)
- Verification form
- Email field (required)
- Password field (required)
- Send verification code button
- Verification process instructions

### Payment Gateway Page (`/payment-gateway`)
- Payment information
- "Make Payment" button
- Payment methods overview
- Support information
- FAQ section

## 🔄 Form Handling

All forms include:
- **Client-side validation**: Required field checking
- **Type safety**: TypeScript interfaces
- **User feedback**: Success messages
- **Error handling**: Input validation
- **State management**: React hooks (useState)

### Form Submit Example
```javascript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission
  console.log('Form data:', formData);
};
```

## 📱 Responsive Design

The application uses Tailwind CSS breakpoints:
- **Mobile**: < 768px (default)
- **Tablet**: md: (768px+)
- **Desktop**: lg: (1024px+)

Mobile features:
- Hamburger menu in header
- Stacked layout
- Optimized images
- Touch-friendly buttons

## 🔗 Navigation Routes

All routes are defined in the header component:

| Page | Route | Label |
|------|-------|-------|
| Home | `/` | HOME > |
| Services | `/services` | OUR SERVICES > |
| Contact | `/contact` | CONTACT US > |
| Loan Application | `/loan-application` | LOAN APPLICATION > |
| Email Verification | `/email-verification` | EMAIL VERIFICATION > |
| Payment Gateway | `/payment-gateway` | PAYMENT GATEWAY > |

## 🎯 Customization

### Change Colors
Edit `app/globals.css` or Tailwind classes in component files.

### Update Images
Replace image URLs from:
```
https://lendig0.simdif.com/images/public/
```

### Modify Navigation
Edit `components/header.tsx` navItems array:
```typescript
const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  // Add more items...
];
```

### Update Company Information
Edit footer and metadata in:
- `components/footer.tsx`
- `app/layout.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

The application will be automatically built and deployed.

### Environment Variables
No environment variables required for basic functionality.

For payment gateway integration, add:
```env
NEXT_PUBLIC_PAYMENT_GATEWAY_URL=your_gateway_url
```

## ✨ Performance Features

- **Next.js Optimization**: Server-side rendering ready
- **Image Optimization**: Automatic image compression
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind purges unused styles
- **Fast Refresh**: Instant feedback during development

## 🔐 Security

- **Type Safety**: Full TypeScript coverage
- **Input Validation**: Form field validation
- **XSS Protection**: React's built-in XSS protection
- **HTTPS Ready**: Deploy with HTTPS

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Development Tips

### Hot Module Replacement (HMR)
Changes automatically refresh in the browser during development.

### TypeScript
Full type checking enabled. Run:
```bash
npm run build
```
to check for type errors.

### Styling
Tailwind CSS provides utility-first styling:
- Use Tailwind classes in JSX
- No CSS files needed for component styles
- Responsive design with `md:`, `lg:` prefixes

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next node_modules
npm install
```

### Build Errors
```bash
npm run build
```
Check error messages and fix accordingly.

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review the code comments
3. Check Next.js/React documentation
4. Open an issue in the repository

## 📝 License

©2024 Drance Nigeria Limited - All Rights Reserved

---

**Ready to start?** Run `npm install` and `npm run dev` to launch the application! 🚀
