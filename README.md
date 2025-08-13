# SLK-Investments

A modern, responsive website for SLK Investments built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Page transitions and micro-interactions using Framer Motion
- **Multi-page Application**: Home, About, Services, Case Studies, Pricing, and Contact pages
- **Professional UI Components**: Custom components for testimonials, pricing, contact forms, and more

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section component
│   ├── Services.tsx    # Services showcase
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Pricing.tsx     # Pricing plans
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── CaseStudies.tsx # Case studies page
│   ├── Pricing.tsx     # Pricing page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vuma-s1/SLK-Investements.git
cd SLK-Investements
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying `tailwind.config.js` for theme customization
2. Adding custom CSS in `src/index.css`
3. Using Tailwind utility classes directly in components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Adding New Components

1. Create a new component in `src/components/`
2. Import and use it in your pages
3. Follow the existing component structure and naming conventions

## 📄 License

This project is private and proprietary to SLK Investments.

## 🤝 Contributing

This is a private project for SLK Investments. For any questions or support, please contact the development team.

---

Built with ❤️ for SLK Investments
