'use client'
// notes
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from "./_components/hero"
import Introduccion from "./_components/introduccion"
import Seccionario from "./_components/seccionario"
import Section1 from "./_components/section1"
import Section2 from "./_components/section2"
import Section3 from "./_components/section3"
import Section4 from "./_components/section4"
import Section5 from "./_components/section5"
import Section6 from "./_components/section6"
import Section7 from "./_components/section7"
import Section8 from "./_components/section8"
import Color from "./_components/color"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  const [currentSection, setCurrentSection] = useState('')
  const [currentTitle, setCurrentTitle] = useState('')

  const navRef = useRef(null)
  const introduccionRef = useRef(null)

  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)
  const sec3Ref = useRef(null)
  const sec4Ref = useRef(null)
  const sec5Ref = useRef(null)
  const sec6Ref = useRef(null)
  const sec7Ref = useRef(null)
  const sec8Ref = useRef(null)

  function firstEnter(){
    setCurrentSection('Introduccion')
    setCurrentTitle('Historias a la Carta')
  }
  function firstLeave(){
    setCurrentSection('')
    setCurrentTitle('')
  }
  useEffect(() => {

  const introduccion = introduccionRef.current
  const nav = navRef.current

  const sec1 = sec1Ref.current
  const sec2 = sec2Ref.current
  const sec3 = sec3Ref.current
  const sec4 = sec4Ref.current
  const sec5 = sec5Ref.current
  const sec6 = sec6Ref.current
  const sec7 = sec7Ref.current
  const sec8 = sec8Ref.current

  gsap.to(nav, {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: introduccion,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: false,
      toggleActions: 'restart none none none',
      onEnter: () => firstEnter(),
      onLeaveBack: () => firstLeave(),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec1,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('Antes de 1541 – Época Prehispánica'),
      onLeaveBack: () => setCurrentSection('Introduccion'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec2,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('1541 – Fundación de Santa Fe de Antioquia y Llegada de los Españoles'),
      onLeaveBack: () => setCurrentSection('Antes de 1541 – Época Prehispánica'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec3,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('1540s-1560s – Consolidación de la Gastronomía Mestiza'),
      onLeaveBack: () => setCurrentSection('1541 – Fundación de Santa Fe de Antioquia y Llegada de los Españoles'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec4,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('Siglo XVII – Diversificación de la Cocina Local'),
      onLeaveBack: () => setCurrentSection('1540s-1560s – Consolidación de la Gastronomía Mestiza'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec5,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('Siglo XVIII – Enriquecimiento de la Cocina Local'),
      onLeaveBack: () => setCurrentSection('Siglo XVII – Diversificación de la Cocina Local'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec6,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('Siglo XIX – Identidad Gastronómica Antioqueña'),
      onLeaveBack: () => setCurrentSection('Siglo XVIII – Enriquecimiento de la Cocina Local'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec7,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('Siglo XX – Modernización y Conservación de la Cocina Tradicional'),
      onLeaveBack: () => setCurrentSection('Siglo XIX – Identidad Gastronómica Antioqueña'),
    }
  })
  gsap.to(nav, {
    scrollTrigger: {
      trigger: sec8,
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: true,
      onEnter: () => setCurrentSection('Siglo XXI – Resurgimiento y Sostenibilidad'),
      onLeaveBack: () => setCurrentSection('Siglo XX – Modernización y Conservación de la Cocina Tradicional'),
    }
  })

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
}, [])

  return (
    <div>
      <Color>
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 opacity-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="font-semibold text-xl">{currentTitle}</span>
              </div>
              <div>
                <span className="text-lg font-medium">{currentSection}</span>
              </div>
            </div>
          </div>
        </nav>
        <Hero></Hero>
        <div className="" ref={introduccionRef}>
          <Introduccion></Introduccion>
        </div>
        <Seccionario></Seccionario>
        <div className="" ref={sec1Ref}>
          <Section1></Section1>
        </div>
      </Color>
      <div ref={sec2Ref}><Section2></Section2></div>
      <div ref={sec3Ref}><Section3></Section3></div>
      <div ref={sec4Ref}><Section4></Section4></div>
      <div ref={sec5Ref}><Section5></Section5></div>
      <div ref={sec6Ref}><Section6></Section6></div>
      <div ref={sec7Ref}><Section7></Section7></div>
      <div ref={sec8Ref}><Section8></Section8></div>
    </div>
  );
}

// export default function FullParallaxPage() {

//   const colorChangeRef = useRef(null)
//   const imageRef = useRef(null)
//   const paragraphRef = useRef(null)

//   useEffect(() => {
//     const sections = sectionsRef.current
//     const colorChangeSection = colorChangeRef.current
//     const image = imageRef.current
//     const paragraph = paragraphRef.current

//     sections.forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: 'top center',
//         end: 'bottom center',
//         onEnter: () => setCurrentSection(['Welcome', 'About', 'Color Magic', 'Enhanced Image', 'Los Nutabes', 'Contact'][i]),
//         onEnterBack: () => setCurrentSection(['Welcome', 'About', 'Color Magic', 'Enhanced Image', 'Los Nutabes', 'Contact'][i]),
//       })
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <div className="min-h-screen">
//       <Navbar currentSection={currentSection} />
//       <Header ref={el => (sectionsRef.current[0] = el)} />
//       <About ref={el => (sectionsRef.current[1] = el)} />
//       <ColorChangeSection ref={el => {
//         sectionsRef.current[2] = el
//         colorChangeRef.current = el
//       }} />
//       <EnhancedImageSection 
//         ref={el => (sectionsRef.current[3] = el)}
//         imageRef={imageRef}
//         paragraphRef={paragraphRef}
//       />
//       <ParallaxNutabesSection ref={el => (sectionsRef.current[4] = el)} />
//       <Contact ref={el => (sectionsRef.current[5] = el)} />
//     </div>
//   )
// }

// const Navbar = ({ currentSection }) => (
//   <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between h-16">
//         <div className="flex items-center">
//           <span className="font-semibold text-xl text-gray-800">Parallax World</span>
//         </div>
//         <div>
//           <span className="text-lg font-medium text-gray-600">{currentSection}</span>
//         </div>
//       </div>
//     </div>
//   </nav>
// )

// const Header = React.forwardRef((props, ref) => (
//   <div ref={ref} className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
//     <div className="text-center">
//       <h1 className="text-6xl font-bold text-white mb-4">Welcome to Parallax World</h1>
//       <p className="text-xl text-white">Scroll down to explore</p>
//     </div>
//   </div>
// ))

// const About = React.forwardRef((props, ref) => (
//   <div ref={ref} className="h-screen flex items-center justify-center bg-gray-100">
//     <div className="text-center max-w-2xl mx-auto px-4">
//       <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h2>
//       <p className="text-xl text-gray-600">
//         We create immersive scrolling experiences using the latest web technologies.
//         Our goal is to make the web more interactive and engaging.
//       </p>
//     </div>
//   </div>
// ))

// const ColorChangeSection = React.forwardRef((props, ref) => (
//   <div ref={ref} className="h-screen flex items-center justify-center bg-blue-300 transition-colors duration-300">
//     <div className="text-center">
//       <h2 className="text-5xl font-bold text-white mb-4">Color Magic</h2>
//       <p className="text-xl text-white">Watch the background transform as you scroll</p>
//     </div>
//   </div>
// ))

// const EnhancedImageSection = React.forwardRef(({ imageRef, paragraphRef }, ref) => (
//   <div ref={ref} className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
//     <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//       <div className="md:w-1/2 mb-8 md:mb-0">
//         <h2 className="text-4xl font-bold text-white mb-4">Enhanced Image Section</h2>
//         <p ref={paragraphRef} className="text-xl text-white">
//           This section demonstrates a subtle animation effect. As you scroll, 
//           watch how the image gently zooms and rotates into view. This technique 
//           adds a touch of dynamism to the page, creating a more engaging and 
//           interactive user experience. The smooth entrance of both the image and 
//           this text helps draw attention and guide the user's focus.
//         </p>
//       </div>
//       <div className="md:w-1/2 flex justify-center">
//         <div className="relative w-64 h-64">
//           <Image
//             ref={imageRef}
//             src="/placeholder.svg?height=256&width=256"
//             alt="Enhanced Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-xl"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// ))

// const ParallaxNutabesSection = React.forwardRef((props, ref) => {
//   const { scrollYProgress } = useScroll()
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

//   return (
//     <div ref={ref} className="relative h-screen overflow-hidden bg-amber-100">
//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{ y }}
//       >
//         <Image
//           src="/placeholder.svg?height=1080&width=1920"
//           alt="Paisaje de Santa Fe de Antioquia"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-50"
//         />
//       </motion.div>
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <div className="max-w-6xl mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
//               <h2 className="text-3xl font-bold mb-6 text-amber-800">Los Nutabes: Gastronomía Ancestral</h2>
//               <motion.p 
//                 className="text-lg text-gray-800 leading-relaxed"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 Los Nutabes, tribus originarias de la región de lo que hoy es Santa Fe de Antioquia, basaban su alimentación en productos autóctonos como el maíz, la yuca, la batata, los frijoles y diversas frutas como el aguacate y el guanábano. Estas frutas se consumían crudas, mientras que los tubérculos se hervían y las proteínas se obtenían principalmente de animales silvestres y peces capturados en los ríos cercanos. La preparación de estos alimentos se realizaba al aire libre, cocinados en fogones. Las técnicas de cocción utilizadas por los Nutabes eran sencillas, como el asado directo al fuego, mientras que las vasijas de barro eran fundamentales para hervir los alimentos. Entre los platos destacados de esta época se encontraban las arepas de maíz simples, tubérculos hervidos y frutas crudas.
//               </motion.p>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <motion.div
//                 className="relative w-full h-64 md:h-96"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Representación de la gastronomía Nutabe"
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg shadow-xl"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// })

// const Contact = React.forwardRef((props, ref) => (
//   <div ref={ref} className="h-screen flex items-center justify-center bg-gray-900">
//     <div className="text-center">
//       <h2 className="text-3xl font-semibold text-white mb-4">Get in Touch</h2>
//       <p className="text-xl text-gray-400">Thank you for scrolling through our parallax world!</p>
//     </div>
//   </div>
// ))

// Header.displayName = 'Header'
// About.displayName = 'About'
// ColorChangeSection.displayName = 'ColorChangeSection'
// EnhancedImageSection.displayName = 'EnhancedImageSection'
// ParallaxNutabesSection.displayName = 'ParallaxNutabesSection'
// Contact.displayName = 'Contact'
