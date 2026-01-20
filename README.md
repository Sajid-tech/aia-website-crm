# 🚀 AIA Website CRM

> A Modern, Feature-Rich Content Management System Built with React & Vite

[![Version](https://img.shields.io/badge/version-3.0.8-blue?style=flat-square&logo=npm)](https://www.npmjs.com/package/aia-new-crm)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/badge/Node-16+-success?style=flat-square&logo=node.js)](https://nodejs.org)

---

## ✨ Features at a Glance

| Feature                      | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| 🔐 **Secure Authentication** | JWT-based auth with encrypted state persistence      |
| 👥 **User Management**       | Student records, testimonials & certificate tracking |
| 📝 **Content Management**    | Blogs, FAQs, banners & gallery management            |
| 🎓 **Course Management**     | YouTube lectures & course organization               |
| 🏢 **Multi-Company**         | Manage multiple companies with country configs       |
| 📊 **Analytics**             | Real-time reports & user activity tracking           |
| 📱 **Responsive**            | Mobile-first UI with adaptive layouts                |
| 🎨 **Modern UI**             | Shadcn components with smooth animations             |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn** package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/moorthygithub/aia-website-crm.git
cd aia-website-crm

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173
```

### Available Commands

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run lint`    | Run ESLint code validation        |
| `npm run preview` | Preview production build locally  |

---

## 📂 Project Structure

```
aia-website-crm/
│
├── 📦 src/
│   ├── 🎨 components/          # Reusable UI components
│   │   ├── ui/                # Shadcn UI components
│   │   ├── auth/              # Authentication UI
│   │   └── common/            # Shared utilities
│   │
│   ├── 📄 app/                 # Page & feature modules
│   │   ├── auth/              # Login & auth pages
│   │   ├── blog/              # Blog management
│   │   ├── student/           # Student records
│   │   ├── company/           # Company management
│   │   ├── gallery/           # Media management
│   │   ├── banner/            # Banner management
│   │   ├── faq/               # FAQ management
│   │   └── ...
│   │
│   ├── 🔌 api/                 # API client & endpoints
│   │   ├── apiClient.js       # Axios instance
│   │   └── index.js           # API routes
│   │
│   ├── 🎣 hooks/               # Custom React hooks
│   │   ├── useApiMutation.js  # API mutations
│   │   ├── use-auth.js        # Auth hook
│   │   └── ...
│   │
│   ├── 🏪 store/               # Redux state management
│   │   ├── authSlice.js       # Auth state
│   │   ├── companySlice.js    # Company state
│   │   └── uiSlice.js         # UI state
│   │
│   ├── 🛣️  routes/              # Route configuration
│   │   ├── app-routes.jsx     # Main routes
│   │   ├── protected-route.jsx # Protected routes
│   │   └── ...
│   │
│   ├── 🔧 utils/               # Utility functions
│   │   ├── authToken.js       # Token management
│   │   ├── imageUtils.js      # Image handling
│   │   └── encryption/        # Encryption utilities
│   │
│   ├── ⚙️  config/              # Configuration files
│   ├── 📚 constants/            # App constants
│   ├── 📖 lib/                  # Library utilities
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
│
├── 🎯 public/                  # Static assets
├── 📋 package.json             # Dependencies
├── ⚡ vite.config.js           # Vite config
├── 🎨 tailwind.config.js       # Tailwind config
└── 📖 README.md                # This file

```

---

## 🛠️ Technology Stack

### **Frontend Framework**

- **React** 18.3 - Component library
- **Vite** 5.4 - Lightning fast build tool
- **React Router** 6.27 - Client-side routing

### **State Management & Data**

- **Redux Toolkit** 2.11 - Predictable state management
- **Redux Persist** 6.0 - State persistence with encryption
- **TanStack Query** 5.60 - Server state management
- **TanStack Table** 8.20 - Advanced data tables
- **React Hook Form** 7.53 - Lightweight form handling

### **UI & Styling**

- **Tailwind CSS** 3.4 - Utility-first CSS
- **Shadcn UI** - High-quality components
- **Radix UI** 1.x - Accessible primitives
- **Framer Motion** 11.11 - Smooth animations
- **Emotion** 11.13 - CSS-in-JS styling
- **Lucide React** 0.453 - Beautiful icons

### **Forms & Rich Content**

- **React Select** 5.9 - Advanced select component
- **CKEditor 4** 4.3 - Rich text editor
- **React Day Picker** 8.10 - Date picker

### **Utilities**

- **Axios** 1.7 - HTTP client
- **Crypto-JS** 4.2 - Encryption/decryption
- **Moment.js** 2.30 - Date formatting
- **Sonner** 2.0 - Toast notifications
- **Embla Carousel** 8.3 - Carousel component

### **Development Tools**

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 📦 Core Modules

### **Authentication Module** `app/auth/`

Secure user authentication with JWT tokens and session management.

### **Blog Module** `app/blog/`

Create, edit, and manage blog posts with FAQ integration and rich text editing.

### **Student Module** `app/student/`

Comprehensive student management including:

- Student records & profiles
- Testimonials & reviews
- Certificate tracking
- YouTube stories
- Office images

### **Company Module** `app/company/`

Multi-company management with country-specific configurations and settings.

### **Gallery Module** `app/gallery/`

Manage image and media galleries with create, edit, and delete functionality.

### **Banner Module** `app/banner/`

Create and manage website banners and promotional content.

### **FAQ Module** `app/faq/`

Frequently asked questions management system.

### **Lecture Module** `app/lecture-youtube/`

YouTube lecture integration and course content management.

### **Newsletter Module** `app/newsletter/`

Newsletter subscription and email management system.

---

## 🔐 Security Features

✅ **JWT Authentication** - Secure token-based authentication  
✅ **Session Timeout** - Automatic session expiration tracking  
✅ **Encrypted State** - Redux state persisted with encryption  
✅ **Protected Routes** - Role-based access control  
✅ **Secure API Client** - Axios with token injection  
✅ **Token Management** - Automatic token refresh & validation  
✅ **Environment Protection** - Sensitive data never exposed

---

## 🎨 UI/UX Highlights

### Component Library

- Built with **Shadcn UI** for beautiful, accessible components
- **Radix UI** primitives for maximum flexibility
- **Tailwind CSS** for rapid, responsive styling

### Design System

- **Dark mode** support with theme context
- **Smooth animations** with Framer Motion
- **Responsive layout** mobile-first approach
- **Accessible** components with ARIA labels

### User Experience

- **Toast notifications** with Sonner
- **Loading states** with skeleton loaders
- **Error boundaries** for graceful error handling
- **Real-time feedback** on user actions

---

## 🔌 API Integration

The project uses a centralized API client pattern:

```javascript
// api/apiClient.js
// Configured with automatic token injection
// Handles error responses gracefully
// Supports request/response interceptors

// api/index.js
// Organized API endpoints
// RESTful resource management
// Type-safe API calls
```

**Features:**

- Centralized Axios instance
- Automatic authentication token injection
- Request/response error handling
- Base URL configuration
- Interceptor support

---

## 📊 State Management

Using **Redux Toolkit** with slices for:

```
store/
├── authSlice.js          # User authentication state
├── companySlice.js       # Company data state
├── versionSlice.js       # App version state
└── ui/uiSlice.js         # UI state (theme, sidebar, etc.)
```

**Redux Persist** encrypts and saves state to localStorage for persistent sessions.

---

## 📱 Responsive Design

The CRM is fully responsive with:

- **Desktop** - Full-featured sidebar navigation
- **Tablet** - Adaptive layout
- **Mobile** - Collapsible sidebar with bottom navigation
- **Touch-friendly** - Larger tap targets on mobile

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Deploy the 'dist' folder to your hosting
```

### Hosting Options

- **Vercel** (Recommended) - Seamless Vite deployment
- **Netlify** - Drag & drop deployment
- **AWS S3 + CloudFront** - Scalable solution
- **GitHub Pages** - Free static hosting
- **Traditional Servers** - Any Node.js hosting

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_NAME=AIA CRM
VITE_ENCRYPTION_KEY=your_encryption_key
```

---

## 🔄 Development Workflow

### Hot Module Replacement (HMR)

Changes are instantly reflected in the browser without page reload.

```bash
npm run dev
# Visit http://localhost:5173
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint -- --fix
```

### Building

```bash
# Optimize for production
npm run build

# Check build output
npm run preview
```

---

## 📈 Performance

- **Vite** provides instant server start and lightning-fast HMR
- **React Query** optimizes server state management
- **Code splitting** via React Router for lazy loading
- **Image optimization** with responsive utilities
- **Tree shaking** removes unused dependencies
- **Production build** fully minified and optimized

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🔗 Links & Resources

- 📚 [React Documentation](https://react.dev)
- ⚡ [Vite Guide](https://vitejs.dev)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🧩 [Shadcn UI](https://ui.shadcn.com)
- 🎣 [React Hook Form](https://react-hook-form.com)
- 🔄 [Redux Toolkit](https://redux-toolkit.js.org)

---

## 💬 Support

For issues, questions, or feedback:

- Open an issue on [GitHub](https://github.com/moorthygithub/aia-website-crm)
- Create a discussion in the repository
- Check existing issues for solutions

---

## 📞 Contact

**Project Maintainer:** [Moorthy](https://github.com/moorthygithub)

---

<div align="center">

### ⭐ If you found this useful, please give it a star!

**Built with ❤️ for modern web applications**

**Version 3.0.8** | © 2024 AIA Website CRM

</div>
