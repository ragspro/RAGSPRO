# Development Guidelines

## Code Quality Standards

### File Structure & Organization
- **Component Files**: One component per file, named with PascalCase matching the component name
- **Utility Files**: Lowercase with descriptive names (e.g., `shaders.js`, `emailConfig.js`)
- **Page Files**: Kebab-case for multi-word pages (e.g., `meet-founder.js`)
- **Export Pattern**: Use `export default` for main component/function exports

### Naming Conventions
- **Components**: PascalCase (e.g., `RequestProjectSection`, `SEOHead`, `SimpleBlackHole`)
- **Functions**: camelCase (e.g., `handleChange`, `validate`, `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE for configuration (e.g., `EMAILJS_CONFIG`)
- **Variables**: camelCase with descriptive names (e.g., `formData`, `isSubmitting`, `projectTypes`)
- **Props**: camelCase with default values using destructuring (e.g., `{ title = "...", description = "..." }`)

### Import Organization
Follow this consistent order:
1. React core imports (`useState`, `useRef`, `useMemo`)
2. Third-party libraries (Framer Motion, React Icons, EmailJS)
3. Three.js and 3D-related imports
4. Local components
5. Local utilities and configuration

Example:
```javascript
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../utils/emailConfig'
```

### Code Formatting
- **Indentation**: 2 spaces (consistent across all files)
- **Quotes**: Single quotes for JavaScript strings, double quotes for JSX attributes
- **Semicolons**: Consistently omitted (semicolon-free style)
- **Line Length**: Keep reasonable, break long lines for readability
- **Spacing**: Space after keywords, around operators, and in object literals

## React Patterns

### State Management
- **useState Hook**: Primary state management for component-level state
- **Destructured State**: Always destructure state and setState functions
- **State Updates**: Use functional updates when depending on previous state
  ```javascript
  setFormData(prev => ({ ...prev, [name]: value }))
  setErrors(prev => ({ ...prev, [name]: '' }))
  ```

### Form Handling Pattern
Consistent form handling across components:
```javascript
const [formData, setFormData] = useState({ /* initial values */ })
const [isSubmitting, setIsSubmitting] = useState(false)
const [isSubmitted, setIsSubmitted] = useState(false)
const [errors, setErrors] = useState({})

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: '' }))
  }
}

const validate = () => {
  const newErrors = {}
  // validation logic
  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (!validate()) return
  // submission logic
}
```

### Animation Patterns

#### Framer Motion
- **Initial/Animate Pattern**: Use for entrance animations
  ```javascript
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
  ```
- **WhileInView**: Use for scroll-triggered animations
  ```javascript
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
  ```
- **Staggered Animations**: Use delay for sequential reveals
  ```javascript
  transition={{ duration: 0.6, delay: index * 0.1 }}
  ```

#### Three.js / React Three Fiber
- **useFrame Hook**: For continuous animations
  ```javascript
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.z = t * 0.2
  })
  ```
- **useRef**: Always use refs for direct mesh/object manipulation
- **useMemo**: Use for expensive calculations or initial values
  ```javascript
  const initialPosition = useMemo(() => new Vector3(...position), [position])
  ```

### Component Composition
- **Reusable Data Arrays**: Define data structures outside component for clarity
  ```javascript
  const projectTypes = [
    { id: 'ai-product', name: 'AI Product Development', icon: <FiCpu /> },
    // ...
  ]
  ```
- **Map Pattern**: Use `.map()` for rendering lists with proper keys
  ```javascript
  {projectTypes.map((type) => (
    <button key={type.id}>...</button>
  ))}
  ```

## Styling Conventions

### TailwindCSS Usage
- **Utility-First**: Prefer Tailwind utilities over custom CSS
- **Responsive Design**: Use responsive prefixes (`md:`, `lg:`)
  ```javascript
  className="text-3xl md:text-4xl"
  ```
- **Conditional Classes**: Use template literals for dynamic classes
  ```javascript
  className={`border ${errors.name ? 'border-red-500' : 'border-gray-700'}`}
  ```
- **Common Patterns**:
  - Glass effect: `glass-card` (custom class)
  - Gradients: `text-gradient` (custom class)
  - Sections: `section-padding` (custom class)
  - Containers: `container mx-auto px-4`

### Color Scheme
- **Primary Background**: `bg-primary` or `bg-black`
- **Secondary Background**: `bg-secondary` or `bg-gray-900`
- **Accent Color**: `text-accent`, `bg-accent`, `border-accent`
- **Text Colors**: `text-white`, `text-gray-400`, `text-gray-300`
- **Opacity Modifiers**: Use `/10`, `/20`, `/50` for transparency

## SEO & Accessibility

### SEO Best Practices
- **SEOHead Component**: Use on every page with customized props
- **Structured Data**: Include JSON-LD schema markup
- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
- **Alt Text**: Always include descriptive alt text for images
- **Aria Labels**: Add `aria-label` for icon-only buttons
  ```javascript
  aria-label="Select budget range"
  ```

### Accessibility Patterns
- **Form Labels**: Always associate labels with inputs
- **Focus States**: Use `focus:outline-none focus:ring-2 focus:ring-accent`
- **Button States**: Disable buttons during submission with visual feedback
- **Semantic Elements**: Use `<section>`, `<nav>`, `<main>`, `<footer>`

## Performance Optimization

### Component Optimization
- **Conditional Rendering**: Use ternary operators for simple conditions
- **Lazy Loading**: Defer heavy components (3D models, animations)
- **Memoization**: Use `useMemo` for expensive calculations
- **Refs Over State**: Use refs for values that don't trigger re-renders

### Animation Performance
- **Transform Properties**: Prefer `transform` over `top`/`left` for animations
- **GPU Acceleration**: Use `will-change` sparingly
- **Frame Rate**: Keep animations at 60fps by optimizing useFrame logic
- **Conditional Animation**: Reduce animation complexity on mobile

## Error Handling

### Form Validation
- **Client-Side Validation**: Always validate before submission
- **Real-Time Feedback**: Clear errors on field change
- **Error Display**: Show inline error messages below fields
- **Email Validation**: Use regex pattern for email validation
  ```javascript
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ```

### API Error Handling
- **Try-Catch Pattern**: Use `.then()/.catch()` for promises
- **Fallback Mechanisms**: Provide mailto fallback for email failures
- **User Feedback**: Show success/error states with visual indicators
- **Timeout Handling**: Auto-hide success messages after delay
  ```javascript
  setTimeout(() => {
    setIsSubmitted(false)
  }, 5000)
  ```

## 3D Graphics & Shaders

### WebGL Shader Patterns
- **Vertex Shader**: Always include `varying` variables for fragment shader
  ```glsl
  varying vec2 vUv;
  varying vec3 vPosition;
  ```
- **Fragment Shader**: Use uniforms for dynamic values
  ```glsl
  uniform float time;
  uniform vec2 resolution;
  uniform float intensity;
  ```
- **Noise Functions**: Include helper functions at top of shader
- **Color Mixing**: Use `mix()` for smooth color transitions
- **Smoothstep**: Use for smooth edge transitions

### Three.js Component Structure
- **Group Organization**: Wrap related meshes in `<group>`
- **Material Properties**: Set appropriate metalness, roughness, emissive
- **Geometry Args**: Use appropriate segment counts for quality/performance balance
- **Transparency**: Set `transparent` and `opacity` for glass effects

## Documentation & Comments

### Code Comments
- **Minimal Comments**: Write self-documenting code with clear names
- **Section Comments**: Use comments to separate logical sections
  ```javascript
  // Black hole core
  // Accretion disk
  // Outer glow
  ```
- **Complex Logic**: Comment non-obvious algorithms or calculations
- **Shader Comments**: Document shader sections and functions

### Component Documentation
- **Props Documentation**: Use descriptive default values
- **Function Purpose**: Name functions clearly to indicate purpose
- **Data Structures**: Comment complex data structure purposes

## Configuration & Environment

### External Services
- **EmailJS Integration**: Use centralized config from `emailConfig.js`
- **API Keys**: Store in `.env` file, never commit
- **Service IDs**: Reference via imported constants
  ```javascript
  import { EMAILJS_CONFIG } from '../utils/emailConfig'
  ```

### Build Configuration
- **Next.js Config**: Optimize for performance and SEO
- **Image Optimization**: Configure formats and settings
- **Webpack Customization**: Only when necessary for performance

## Testing & Validation

### Manual Testing Checklist
- Test form validation with invalid inputs
- Verify responsive design on multiple screen sizes
- Check animation performance on different devices
- Validate SEO meta tags with browser tools
- Test email functionality with real submissions
- Verify accessibility with keyboard navigation

### Browser Compatibility
- Target modern browsers with ES6+ support
- Ensure WebGL support for 3D features
- Test on both desktop and mobile devices
- Verify touch interactions on mobile

## Git & Version Control

### Commit Practices
- Write clear, descriptive commit messages
- Commit logical units of work
- Test before committing
- Keep commits focused and atomic

### File Organization
- Keep related files together
- Use consistent directory structure
- Separate concerns (components, utils, pages)
- Maintain clean public assets organization
