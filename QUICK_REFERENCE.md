# 🚀 QUICK REFERENCE - Benji Style Components

## 🎯 Sticky Scroll Setup

### Hero (Sticky)
```jsx
<motion.section
  style={{ opacity, scale }}
  className="sticky top-0 h-screen z-0"
/>
```

### Projects (Slides Over)
```jsx
<section className="relative z-10 rounded-t-[48px] -mt-24 shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
```

## 🎨 Glass Morphism

### Light Glass
```jsx
className="bg-white/90 backdrop-blur-lg"
```

### Dark Glass
```jsx
className="bg-black/60 backdrop-blur-md"
```

## ✨ Common Animations

### Fade In Up
```jsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Stagger Children
```jsx
transition={{ delay: index * 0.1 }}
```

### Hover Lift
```jsx
whileHover={{ y: -12, scale: 1.02 }}
```

## 🎭 Scroll Transforms

```jsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"]
})

const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
```

## 🎨 Color Classes

```jsx
bg-[#22c55e]      // Primary green
text-gray-600     // Secondary text
bg-white/90       // Glass white
bg-black/20       // Dark overlay
```

## 📏 Spacing

```jsx
py-32    // Section padding (128px)
px-8     // Container padding (32px)
gap-8    // Grid gap (32px)
mb-20    // Margin bottom (80px)
```

## 🔲 Rounded Corners

```jsx
rounded-full      // Pills/buttons
rounded-2xl       // Cards (16px)
rounded-t-[48px]  // Section top (48px)
```

## 💫 Shadows

```jsx
shadow-md                              // Default
shadow-xl                              // Elevated
shadow-[0_-20px_60px_rgba(0,0,0,0.15)] // Custom
```

## 📱 Responsive Grid

```jsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

## 🎯 Scroll to Section

```jsx
onClick={() => document.getElementById('section')?.scrollIntoView({ behavior: 'smooth' })}
```

## 🔥 Pro Tips

1. Always use `viewport={{ once: true }}` for performance
2. Stagger delays: `index * 0.1` or `index * 0.15`
3. Hover duration: `0.3s` for snappy feel
4. Scroll animations: `0.6s - 0.7s` for smooth
5. Use `ease: [0.25, 0.1, 0.25, 1]` for custom easing
