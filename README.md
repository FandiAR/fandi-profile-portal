# Fandi Agus Riyanto - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, skills, and projects. Built with React, TypeScript, and Tailwind CSS with a retro-themed dark/light mode toggle.

## ✨ Features

### 🎨 Design & UI

- **Dual Theme Support**: Dark mode (retro terminal-style) and Light mode
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Retro Typography**: Monospace fonts (JetBrains Mono, Source Code Pro)

### 📱 Interactive Components

- **Theme Toggle**: Switch between dark/light modes
- **Scroll to Top**: Easy navigation back to top
- **Contact Form**: Functional contact form with email integration
- **WhatsApp Integration**: Direct messaging via WhatsApp
- **LinkedIn Integration**: Quick access to professional profile

### 📋 Content Sections

- **Hero Section**: Professional introduction with contact information
- **Experience**: 9+ years of professional experience timeline
- **Skills**: Technical skills with proficiency indicators
- **Tech Stack**: Technologies with progress bars
- **Projects**: Portfolio of completed projects
- **Education**: Academic background
- **Contact**: Multiple ways to get in touch

## 🛠 Technologies Used

### Frontend Framework

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons
- **Tailwind Animate** - Smooth animations

### Additional Libraries

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TanStack React Query** - Data fetching and state management
- **Recharts** - Charts and data visualization

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/FandiAR/fandi-profile-portal
cd fandi-profile-portal
```

2. **Install dependencies**

```bash
pnpm i
```

3. **Start development server**

```bash
pnpm run dev
```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero/About section
│   ├── Experience.tsx  # Professional experience
│   ├── Skills.tsx      # Technical skills
│   ├── TechStack.tsx   # Technology stack
│   ├── Projects.tsx    # Portfolio projects
│   ├── Education.tsx   # Educational background
│   ├── ContactForm.tsx # Contact form
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer section
│   ├── ThemeToggle.tsx # Dark/light mode toggle
│   └── ScrollToTop.tsx # Scroll to top button
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## 🎨 Theme Configuration

The website supports two themes:

### Dark Mode (Default)

- **Background**: Black (`#000000`)
- **Primary Text**: Green (`#22c55e`)
- **Secondary Text**: Light Green (`#86efac`)
- **Borders**: Green (`#22c55e`)
- **Style**: Retro terminal aesthetic

### Light Mode

- **Background**: Blue gradient (`from-blue-50 to-indigo-100`)
- **Primary Text**: Blue (`#1e40af`)
- **Secondary Text**: Dark Blue (`#1d4ed8`)
- **Borders**: Blue (`#3b82f6`)
- **Style**: Clean modern design

## 📧 Contact Integration

### Email Contact

- Direct email links to `fandiagusriyanto@gmail.com`
- Functional contact form (requires email service setup)

### WhatsApp Integration

- Direct messaging via WhatsApp to `+62-813-1684-4738`
- Pre-filled message for easy communication

### Social Links

- **LinkedIn**: [https://id.linkedin.com/in/fandiar](https://id.linkedin.com/in/fandiar)
- **GitHub**: [https://github.com/FandiAR](https://github.com/FandiAR)

## 🔧 Customization

### Updating Personal Information

1. Edit `src/components/Hero.tsx` for contact details
2. Update `src/components/Experience.tsx` for work history
3. Modify `src/components/Skills.tsx` for technical skills
4. Customize `src/components/Projects.tsx` for portfolio items

### Theme Customization

- Colors are defined in `tailwind.config.ts`
- Theme logic is in `src/contexts/ThemeContext.tsx`
- Component styling uses Tailwind classes with theme-aware conditionals

### Adding New Sections

1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔐 Environment Variables

For full functionality, you may need to set up:

- Email service configuration
- Analytics tracking
- Any third-party integrations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:

- **Email**: fandiagusriyanto@gmail.com
- **WhatsApp**: +62-813-1684-4738
- **LinkedIn**: [Fandi Agus Riyanto](https://id.linkedin.com/in/fandiar)

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Fandi Agus Riyanto**
