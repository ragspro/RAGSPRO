# Project Structure

## Directory Organization

```
RAGSPRO/
├── src/                          # Source code directory
│   ├── components/               # React components
│   ├── pages/                    # Next.js pages and API routes
│   ├── styles/                   # Global stylesheets
│   └── utils/                    # Utility functions and helpers
├── public/                       # Static assets
│   ├── documents/                # PDF files (resume)
│   ├── fonts/                    # Custom web fonts
│   ├── images/                   # Image assets
│   │   ├── products/             # Product images
│   │   └── projects/             # Project screenshots
│   └── models/                   # 3D model files
├── .amazonq/                     # Amazon Q configuration
│   └── rules/                    # Project rules and memory bank
└── .next/                        # Next.js build output
```

## Core Components

### Layout & Navigation
- **Layout.js**: Main layout wrapper with navigation and footer
- **Navbar.js / Navigation.js**: Site navigation components
- **Footer.js**: Site footer with links and information
- **SmoothScroll.js**: Smooth scrolling implementation

### Hero & Visual Effects
- **HeroSection.js**: Landing section with main call-to-action
- **BlackHoleEffect.js**: Complex 3D black hole animation
- **SimpleBlackHole.js**: Simplified version for performance
- **SplineModel.js**: 3D model integration component
- **CustomCursor.js / CustomCircleCursor.js**: Custom cursor effects

### Content Sections
- **AboutSection.js**: Personal introduction and background
- **ResumeSection.js**: Professional experience and skills
- **ProjectsSection.js**: Portfolio projects showcase
- **GSAPProjectsSection.js**: Animated projects with GSAP
- **FloatingProjects.js**: Floating project cards effect
- **ServicesSection.js**: Agency services presentation
- **PricingSection.js**: Service pricing packages
- **BenjiPricingSection.js**: Specialized pricing component
- **InvestmentPackages.js**: Investment-focused pricing
- **TeamSection.js**: Team member profiles
- **TestimonialsSection.js**: Client testimonials
- **FAQSection.js**: Frequently asked questions
- **ContactSection.js**: Contact form and information
- **RequestProjectSection.js**: Project request form

### Utility Components
- **SEOHead.js**: SEO meta tags and optimization
- **Loader.js**: Loading screen component
- **SectionDivider.js**: Visual section separators
- **VideoModal.js**: Video player modal
- **VideoSection.js**: Video content section
- **WhatsAppButton.js**: WhatsApp contact button
- **FloatingBrand.js**: Floating brand elements
- **MobileOptimizer.js / MobilePerformanceOptimizer.js**: Mobile performance optimization
- **PerformanceProvider.js**: Performance context provider

## Pages Structure

### Main Pages
- **index.js**: Homepage with all main sections
- **meet-founder.js**: Founder biography and story
- **our-story.js**: Company/personal story page
- **projects.js**: Dedicated projects showcase page
- **privacy-policy.js**: Privacy policy page
- **terms-of-service.js**: Terms of service page

### Special Pages
- **_app.js**: Next.js app wrapper with global providers
- **_document.js**: Custom HTML document structure
- **api/**: API routes directory for backend functionality

## Utilities

### Animation & Effects
- **shaders.js**: WebGL shader programs for 3D effects
- **useBlackHoleAnimation.js**: Custom hook for black hole animation
- **projectsAnimation.js**: Project section animations
- **lazyLoad.js**: Lazy loading utilities

### Configuration
- **emailConfig.js**: EmailJS configuration
- **performance.js**: Performance optimization utilities

## Architectural Patterns

### Component Architecture
- **Modular Design**: Each section is a self-contained component
- **Composition**: Complex sections built from smaller reusable components
- **Performance-First**: Separate optimized versions for mobile devices

### State Management
- **Context API**: Used for performance settings and global state
- **Local State**: Component-level state with React hooks

### Styling Approach
- **TailwindCSS**: Utility-first CSS framework for rapid development
- **CSS Modules**: Scoped styles in globals.css, mobile.css, performance.css
- **Responsive Design**: Mobile-first approach with breakpoint utilities

### Animation Strategy
- **GSAP**: Complex timeline-based animations
- **Framer Motion**: React-friendly declarative animations
- **Three.js**: 3D graphics and WebGL effects
- **Lenis**: Smooth scroll implementation

### Performance Optimization
- **Code Splitting**: Automatic with Next.js dynamic imports
- **Image Optimization**: Next.js Image component (unoptimized for static export)
- **Lazy Loading**: Deferred loading of heavy components
- **Mobile Optimization**: Dedicated mobile performance components
- **Webpack Configuration**: Custom chunk splitting and tree shaking
