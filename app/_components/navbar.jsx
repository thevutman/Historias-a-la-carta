'use client'

import { useEffect, useState, useRef } from 'react'
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax'

function navbar() {
    const [currentSection, setCurrentSection] = useState('Welcome')
    const sectionRefs = useRef([])
    useEffect(() => {
        const handleLoad = () => {
          window.dispatchEvent(new Event('resize'))
        }
    
        window.addEventListener('load', handleLoad)
    
        const observers = sectionRefs.current.map((ref, index) => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setCurrentSection(['Welcome', 'Explore', 'Experience', 'Discover', 'Farewell'][index])
              }
            },
            { threshold: 0.5 }
          )
          observer.observe(ref)
          return observer
        })
    
        return () => {
          window.removeEventListener('load', handleLoad)
          observers.forEach(observer => observer.disconnect())
        }
    },[])
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <span className="font-semibold text-xl text-white">Parallax World</span>
                </div>
                <div>
                    <span className="text-lg font-medium text-white">{currentSection}</span>
                </div>
            </div>
    </div>
  </nav>
  )
}

export default navbar