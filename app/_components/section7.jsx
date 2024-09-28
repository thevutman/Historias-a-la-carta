'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture from '../../public/9.svg'

gsap.registerPlugin(ScrollTrigger)

export default function EnhancedImageSection() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const paragraphRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const paragraph = paragraphRef.current

    gsap.to(image, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        markers: false,
        start: 'top center',
        end: 'bottom, bottom',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })

    gsap.to(paragraph, {
      y: 50,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom bottom',
        markers: true,
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center bg-white">
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Década de 1900-1920</h2>
          <p className="text-xl text-center text-stone-900">
          La llegada de los electrodomésticos cambió la forma de preparar los alimentos, facilitando procesos como el horneado y la cocción. Sin embargo, en las áreas rurales se mantuvieron muchas de las técnicas tradicionales. Platos como el sancocho seguían preparándose en fogones al aire libre, y las carnes se asaban siguiendo métodos ancestrales.
          </p>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Década de 1940 - Escasez Durante la Segunda Guerra Mundial</h2>
          <p className="text-xl text-stone-900">
          Durante la Segunda Guerra Mundial, la escasez de algunos productos llevó a la adaptación de muchas recetas locales. A pesar de esto, la bandeja paisa permaneció como un plato central en la dieta antioqueña. Platos como los fríjoles con arroz y chicharrón siguieron siendo icónicos.
          </p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6 h-80">
            <Image
              src={picture}
              alt="Enhanced Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Décadas de 1950-1960 – Apertura al Turismo y Rescate de Platos Tradicionales</h2>
          <p className="text-xl text-center text-stone-900">
          Con la mejora de las infraestructuras en Santa Fe de Antioquia, la ciudad se abrió al turismo. Este auge turístico provocó un renovado interés en la cocina local, y las recetas tradicionales comenzaron a documentarse y rescatarse. Platos como el tamal, el chicharrón y las natillas recuperaron su lugar en la gastronomía local.
          </p>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">1970s-1980s – Primeros Festivales Gastronómicos</h2>
          <p className="text-xl text-center text-stone-900">
          A partir de los años 70, comenzaron a celebrarse los primeros festivales gastronómicos en la región, dedicados a la preservación de la cocina antioqueña. Platos como el arroz con leche y las sopas locales ganaron reconocimiento como parte del patrimonio cultural de la región.
          </p>
        </div>
      </div>
    </div>
  )
}