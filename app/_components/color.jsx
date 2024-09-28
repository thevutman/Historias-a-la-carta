'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Color({children}) {
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
    <div ref={sectionRef} className="bg-background text-white transition-colors duration-300">
        {children}
    </div>
  )
}
