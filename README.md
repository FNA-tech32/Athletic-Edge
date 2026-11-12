# Athletic Edge 🏋️‍♂️

> **Build Perfect Body Shape For Good And Healthy Life.**  
> A modern, full-featured fitness club management platform and athlete web portal built with **React 18**, **Vite**, **Tailwind CSS**, and **Redux Toolkit**.

---

## 📋 Overview

**Athletic Edge** provides a complete digital experience for fitness enthusiasts, certified personal trainers, and gym administrators. From discovering programs and schedules on the public website to managing memberships, personalized workout routines, nutrition meal plans, and real-time member inquiries in the dashboard, Athletic Edge powers modern fitness center operations.

---

## ✨ Features & Architecture

### 🌐 1. Public Athlete Portal
- **Hero & Multimedia Experience:** High-impact landing page featuring background video integration, motivational call-to-actions, and interactive service showcases.
- **Service & Program Catalog:** Comprehensive breakdown of gym services, body engineering, cardio, strength training, and specialized coaching.
- **Trainer Spotlights:** Dedicated trainer cards detailing coaches' credentials, certifications, and specialties.
- **Interactive Schedule & Gallery:** Filterable class and workout schedules alongside an athlete photo gallery.
- **Client Testimonial Slider:** Dynamic client reviews and feedback carousel.
- **Enhanced Contact Section:**
  - Direct inquiry submission with instant toast notification feedback.
  - Physical facility address with location indicators.
  - **Primary Phone:** `+1 (555) 234-5678` (Mon - Fri: 6:00 AM - 10:00 PM).
  - **Alternative 24/7 Helpline:** `+1 (800) 555-EDGE (3343)` (Emergency & round-the-clock member support).
  - **Primary Email:** `info@athleticedge.com` (General inquiries & membership).
  - **Alternative Support Email:** `support@athleticedge.com` (Trainer assistance & helpdesk).

---

### 👤 2. Member Dashboard
- **Profile Customization:** Update personal details, contact numbers, profile photo, and password.
- **Membership Status:** Review active membership plans, duration, renewal dates, and payment history.
- **Assigned Trainers:** View connected trainers and direct availability slots.
- **Personalized Meal Plans:** Access custom dietary programs assigned by personal trainers.
- **Workout Routines:** Track custom training routines and daily activity logs.

---

### 🏋️ 3. Trainer Dashboard
- **Student Roster:** Manage admitted trainees and track their fitness journey.
- **Availability Management:** Set weekly availability time slots for student sessions.
- **Meal Plan Assignment:** Create and assign customized nutrition guidelines to students.
- **Workout Schedules:** Build structured workout regimens tailored to student goals.

---

### 🛡️ 4. Administrator Dashboard
- **Member Management:** Register new members, review user lists, renew, disable, or terminate accounts.
- **Trainer Management:** Onboard new certified trainers and oversee assigned rosters.
- **Membership Plans:** Configure membership tiers, benefits, durations, and pricing.
- **Message Center:** Unified inbox for client inquiries submitted through the contact form, with read/unread tracking and message timestamps.
- **Payment Verification:** Manage cash payments and track transaction records.

---

## 📞 Contact & Brand Details

All branding and contact information is centrally managed in [`src/config/brandConfig.js`](./src/config/brandConfig.js):

| Detail | Information | Description |
|---|---|---|
| **Brand Name** | **Athletic Edge** | Official brand identity |
| **Main Facility** | 100 Athletic Way, Suite 400, Los Angeles, CA 90015 | Physical center location |
| **Primary Phone** | `+1 (555) 234-5678` | Mon – Fri (6:00 AM – 10:00 PM) |
| **Alternative Phone** | `+1 (800) 555-EDGE (3343)` | 24/7 Member Helpline & Emergency |
| **Primary Email** | `info@athleticedge.com` | General inquiries & membership info |
| **Alternative Email** | `support@athleticedge.com` | 24/7 Member support & trainer desk |
| **Operating Hours** | Mon–Thu: 6am–10pm \| Fri–Sat: 7am–9pm \| Sun: 8am–6pm | Facility opening hours |

---

## 🛠️ Tech Stack

- **Frontend Core:** React 18, React DOM, Vite
- **Styling & UI:** Tailwind CSS, PostCSS, Autoprefixer, FontAwesome 6, React Icons (`react-icons`)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`), RTK Query, React-Redux
- **Routing:** React Router DOM v6
- **Forms & Feedback:** React Hook Form, React Hot Toast
- **Authentication & Security:** JWT Decode (`jwt-decode`), JS Cookie, Firebase Auth
- **Documents & PDF:** `@react-pdf/renderer`, `react-pdf`
- **Animations:** Framer Motion

---

## 📁 Project Structure

```text
Athletic-Edge/
├── public/                 # Static assets & favicons
├── src/
│   ├── assets/             # Images, gallery photos, and videos
│   │   ├── gallery/        # High-res gym & fitness imagery
│   │   ├── hero/           # Hero banners
│   │   ├── logo/           # Brand icons & loaders
│   │   └── videos/         # Hero presentation video
│   ├── components/         # Reusable UI components
│   │   ├── Buttons/        # Action buttons & icon wrappers
│   │   ├── Dashboard/      # Dashboard widgets, forms, and tables
│   │   ├── Heading/        # Section heads and typography
│   │   ├── PageHeading/    # Page banner titles
│   │   └── shared/         # BrandLogo, Navbar, Footer
│   ├── config/             # Central configuration (brandConfig.js)
│   ├── pages/              # Application views & route targets
│   │   ├── About/          # About the gym and history
│   │   ├── Contact/        # Contact form with primary & alt details
│   │   ├── Dashboard/      # Admin, Trainer, and User dashboard pages
│   │   ├── Gallery/        # Gym photo showcase
│   │   ├── Home.jsx        # Landing page
│   │   ├── login/          # Member authentication
│   │   ├── Schedule/       # Class schedules
│   │   ├── Services/       # Fitness program descriptions
│   │   └── Signup/         # Member onboarding
│   ├── redux/              # Redux store, RTK Query API slices, and reducers
│   ├── routes/             # React Router routing configuration
│   ├── service/            # User authentication state helpers
│   ├── utils/              # Helper utilities and token handlers
│   ├── App.jsx             # Main application layout wrapper
│   └── main.jsx            # React root mount
├── index.html              # HTML entry point with metadata
├── netlify.toml            # Netlify deployment configuration
├── package.json            # Project dependencies and build scripts
├── tailwind.config.js      # Tailwind theme styling configuration
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher recommended
- **npm**: v9.x or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mkmahmud/fitness.git
   cd Athletic-Edge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Backend Configuration:**
   Ensure the Athletic Edge backend API is running:
   - Backend Repository: [fitness_backend](https://github.com/mkmahmud/fitness_backend.git)
   - Base API URL is configured in [`src/redux/api/baseApi.js`](./src/redux/api/baseApi.js).

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Available Scripts

- `npm run dev` – Launch local development server with Vite hot-module replacement (HMR).
- `npm run build` – Compile and optimize production assets into `dist/`.
- `npm run preview` – Locally preview the production build.
- `npm run lint` – Run ESLint across `.js` and `.jsx` files.

---

## 🌐 Deployment

The project is pre-configured with [`netlify.toml`](./netlify.toml) for seamless deployment to Netlify or any modern hosting provider (Vercel, AWS Amplify, Cloudflare Pages).

**Build command:** `npm run build`  
**Publish directory:** `dist`

---

## 📄 License

This project is licensed under the MIT License. All rights reserved by **Athletic Edge**.
