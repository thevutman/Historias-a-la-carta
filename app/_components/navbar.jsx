  'use client'

  import { useEffect, useState, useRef } from 'react'
  import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  function navbar() {
      // const [currentSection, setCurrentSection] = useState('Welcome')
      // const sectionRefs = useRef([])
      // useEffect(() => {
      //     const handleLoad = () => {
      //       window.dispatchEvent(new Event('resize'))
      //     }
      
      //     window.addEventListener('load', handleLoad)
      
      //     const observers = sectionRefs.current.map((ref, index) => {
      //       const observer = new IntersectionObserver(
      //         ([entry]) => {
      //           if (entry.isIntersecting) {
      //             setCurrentSection(['Welcome', 'Explore', 'Experience', 'Discover', 'Farewell'][index])
      //           }
      //         },
      //         { threshold: 0.5 }
      //       )
      //       observer.observe(ref)
      //       return observer
      //     })
      
      //     return () => {
      //       window.removeEventListener('load', handleLoad)
      //       observers.forEach(observer => observer.disconnect())
      //     }
      // },[])

      const [currentSection, setCurrentSection] = useState('Welcome')

      const sectionRef = useRef(null)

      useEffect(() => {
        // alert(window.scrollY)
        const section = sectionRef.current
    
        gsap.to(section, {
          backgroundColor: '#ffffff',
          color: '#000000',
          scrollTrigger: {
            trigger: section,
            start: 'center bottom',
            end: 'center top',
            scrub: true,
          },
        })
    
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
      }, [])

    return (
      <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                      <span className="font-semibold text-xl">Parallax World</span>
                  </div>
                  <div>
                      <span className="text-lg font-medium">{currentSection}</span>
                  </div>
              </div>
      </div>
    </nav>
    )
  }

  export default navbar