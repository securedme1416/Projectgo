# Moni Africa - Loan Service Platform

A modern, fully responsive Next.js 16 rebuild of the Moni Africa loan service website. This application has been rebuilt from 6 static HTML pages into a dynamic, component-based Next.js application with improved performance, maintainability, and user experience.

## 📋 Project Overview

This is a complete reconstruction of the original Moni Africa website into a modern Next.js application. The project maintains the original design, colors, images, and overall visual appearance while providing:

- Modern React component architecture
- Responsive design for all devices
- Improved performance with Next.js 16
- Better code organization and maintainability
- Enhanced user interactions and forms
- Optimized image loading

## 🗂️ Project Structure

```
app/
├── page.tsx                 # Home page - Main landing page with hero images
├── services/
│   └── page.tsx            # Services page - Display Moni Africa's loan services
├── contact/
│   └── page.tsx            # Contact page - Contact form for inquiries
├── loan-application/
│   └── page.tsx            # Loan application page - Complete application form
├── email-verification/
│   └── page.tsx            # Email verification page - Account verification
├── payment-gateway/
│   └── page.tsx            # Payment gateway page - Payment processing
├── layout.tsx              # Root layout
└── globals.css             # Global styles

components/
├── header.tsx              # Reusable header with navigation
└── footer.tsx              # Reusable footer component
```

## 📄 Pages Included

### 1. **Home Page** (`/`)
- Main landing page
- Hero content with multiple promotional images
- "Apply Now" button linking to loan application
- Complete overview of services

### 2. **Services Page** (`/services`)
- Detailed information about Moni Africa's services
- Service images and descriptions
- Benefits and features listed
- Why choose Moni Africa section

### 3. **Contact Page** (`/contact`)
- Contact form with validation
- Fields: Email, Name, Phone, Message
- Success feedback on submission
- Contact information section

### 4. **Loan Application Page** (`/loan-application`)
- Comprehensive application form
- Fields: Email, Full Name, Address, Sex, Employment Status, Monthly Income, Purpose of Loan
- Form validation
- Success confirmation message

### 5. **Email Verification Page** (`/email-verification`)
- Account verification form
- Email and password fields
- Verification code sending functionality
- Instructions for verification process

### 6. **Payment Gateway Page** (`/payment-gateway`)
- Payment information and instructions
- Integration with external payment gateway
- Multiple payment method information
- FAQ and support information

## 🎨 Design Features

- **Consistent Branding**: Blue color scheme matching original design
- **Modern UI**: Clean, professional interface
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Navigation**: Easy-to-use header with desktop and mobile menu
- **Forms**: User-friendly forms with proper validation
- **Images**: High-quality images from original source
- **Footer**: Consistent footer across all pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lendigo-loan-service
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Key Dependencies

- **Next.js 16.1.6** - React framework
- **React 19.2.4** - UI library
- **Tailwind CSS 4.2** - Styling
- **TypeScript 5.7.3** - Type safety
- **Lucide React** - Icon library
- **Next Image Optimization** - Image handling

## 🎯 Features

✅ Multi-page application with client-side routing
✅ Responsive design with Tailwind CSS
✅ Form handling and validation
✅ Image optimization
✅ Navigation between pages
✅ Mobile-friendly menu
✅ Professional layout and styling
✅ Fully typed with TypeScript
✅ Components-based architecture

## 🔗 Navigation Structure

All pages are easily accessible through the header navigation:
- HOME → `/`
- OUR SERVICES → `/services`
- CONTACT US → `/contact`
- LOAN APPLICATION → `/loan-application`
- EMAIL VERIFICATION → `/email-verification`
- PAYMENT GATEWAY → `/payment-gateway`

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🎓 Conversion Notes

This project was converted from 6 static HTML files:
1. `contact.html` → `/contact`
2. `loan_application.html` → `/loan-application`
3. `our_services.html` → `/services`
4. `email_verification.html` → `/email-verification`
5. `payment_gateway.html` → `/payment-gateway`
6. `index.html` (SMALL BUSINESS LOAN) → `/`

All original design elements, colors, images, and structure have been preserved while modernizing the technical implementation.

## 🔒 Security Features

- Form input validation
- Type safety with TypeScript
- Protected API endpoints ready for backend integration
- Secure image loading

## 📝 License

This project is part of the Moni Africa loan service platform.

## 📞 Support

For support or questions, contact Drance Nigeria Limited (©2024).

---

**Built with** ❤️ using Next.js 16, React 19, and Tailwind CSS
