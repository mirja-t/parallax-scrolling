#### React + TypeScript + Vite + Framer Motion
# Parallax Scrolling Component

This component takes custom content and a background component with motion props for parallax scrolling.

## How to use

```

import { ScrollComponent } from './scrollcomponent/ScrollComponent'
import { ImageSegment } from './scrollcomponent/imageSegment/ImageSegment'
import img from './assets/img.jpg'

function SectionBg(scrollYProgress: any) {
  return (<ImageSegment 
        scrollYProgress={scrollYProgress}
        movement={{
          x: {
            time: [0, 0.2, 0.8, 1],
            value: ['100%', '0%', '0%', '-100%'],
          },
        }}
        image={img}>
          <p>Hello World</p>
      </ImageSegment>)
  }

function App() {
   return (
      <ScrollComponent
         renderComponent={ SectionBg }>
         {/* custom JSX */}
      </ScrollComponent>)
}
```

### ImageSegment props

+ scrollYProgress: scrollYProgress is generated in ScrollComponent and relative to its content height
+ movement: A config object with 3 optional props – x, clipPath, scale (see movement config)

#### optional:

+ className
+ count: if the ImageSegment has multiple children (must be wrapped in React fragment), the count prop represents the amount of children
+ index: if the ImageSegment has multiple children, the index prop represents the index of the current child
+ children: JSX Element

### Movement config
```
movement={{
   x: {
   time: [0, 0.2, 0.8, 1], // relative to index / count from 0 to 1 (1 === 100% of scrollprogress)
   value: ['100%', '0%', '0%', '-100%'], // values to be mapped to time
   },
   clipPath: {
      time: [0, 0.2, 0.8, 1],
      value: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 100% 0% 0%)'],
   },
   scale: {
      time: [0.2, 0.3, 0.7, 0.8],
      value: [1, 1, 1, 0.9],
   }
}}
```