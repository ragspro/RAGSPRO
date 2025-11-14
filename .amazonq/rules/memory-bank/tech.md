# Technology Stack

## Programming Languages
- **JavaScript**: Primary language for all application code
- **JSX**: React component syntax
- **CSS**: Styling with TailwindCSS utilities
- **GLSL**: Shader language for WebGL effects

## Core Framework
- **Next.js 14.1.0**: React framework for production
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - API routes
  - Image optimization
  - Automatic code splitting

## Frontend Libraries

### UI & Rendering
- **React 18.2.0**: Core UI library
- **React DOM 18.2.0**: React rendering for web

### Animation & Effects
- **Framer Motion 10.16.4**: Declarative animations for React
- **GSAP 3.12.2**: Professional-grade animation library
- **Lenis 1.3.11**: Smooth scroll library
- **@studio-freight/lenis 1.0.42**: Alternative smooth scroll implementation

### 3D Graphics
- **@splinetool/react-spline 4.1.0**: 3D model integration
- **Three.js**: WebGL 3D graphics (via shaders and custom implementations)

### UI Components & Icons
- **React Icons 4.12.0**: Icon library
- **Lottie React 2.4.0**: Lottie animation player

### Utilities
- **@emailjs/browser 4.4.1**: Email service integration
- **React Intersection Observer 9.5.2**: Viewport intersection detection

## Styling

### CSS Framework
- **TailwindCSS 3.3.5**: Utility-first CSS framework
- **PostCSS 8.4.31**: CSS transformation tool
- **Autoprefixer 10.4.16**: CSS vendor prefixing
- **Sass 1.69.5**: CSS preprocessor

### Custom Styles
- `globals.css`: Global styles and Tailwind directives
- `mobile.css`: Mobile-specific optimizations
- `performance.css`: Performance-focused styles

## Development Tools

### Build & Bundling
- **Next.js Compiler**: Built-in SWC-based compiler
- **Webpack**: Module bundler (configured via Next.js)
- **SWC Minify**: Fast JavaScript minification

### Code Quality
- **ESLint 8.53.0**: JavaScript linting
- **eslint-config-next 14.0.0**: Next.js ESLint configuration

## Configuration Files

### Next.js Configuration
- **next.config.js**: Main Next.js configuration
  - React strict mode enabled
  - SWC minification enabled
  - Image optimization settings
  - Webpack customizations for chunk splitting
  - Tree shaking optimizations
  - Console removal in production

### Build Configuration
- **jsconfig.json**: JavaScript project configuration
- **postcss.config.js**: PostCSS plugins configuration
- **tailwind.config.js**: TailwindCSS customization
- **vercel.json**: Vercel deployment configuration

## Development Commands

### Local Development
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint checks
```

### Shell Scripts
- **run.sh**: Quick run script
- **start.sh**: Start script
- **setup.sh**: Initial setup script
- **download-fonts.sh**: Font download utility

## Environment Variables
- **.env**: Environment configuration (EmailJS keys, API endpoints)

## Static Assets

### Fonts
- **Inter**: Variable font (inter-var.woff2)
- **Inter Bold**: Bold weight (Inter-Bold.woff)
- Custom fonts.css for font-face declarations

### Documents
- **Raghav_Shah_Resume.pdf**: Downloadable resume

### Images
- Product images in `public/images/products/`
- Project screenshots in `public/images/projects/`
- Logo and branding assets

### SEO & Verification
- **robots.txt**: Search engine crawling rules
- **sitemap.xml**: Site structure for search engines
- **manifest.json**: PWA manifest
- **BingSiteAuth.xml**: Bing webmaster verification
- **google431c847c1de56ddb.html**: Google Search Console verification
- **humans.txt**: Human-readable site information
- **security.txt**: Security policy and contact

## Performance Optimizations

### Webpack Configuration
- Aggressive chunk splitting (10KB min, 100KB max)
- Vendor chunk separation
- Common chunk extraction
- Tree shaking enabled
- Side effects optimization

### Runtime Optimizations
- Scroll restoration (experimental)
- Image format optimization (WebP, AVIF)
- Console removal in production
- External dependencies for heavy libraries

## Browser Support
- Modern browsers with ES6+ support
- WebGL support required for 3D effects
- Responsive design for mobile and desktop

## Deployment Targets
- **Netlify**: Primary deployment platform
- **GitHub Pages**: Alternative deployment option
- **Vercel**: Configured with vercel.json
