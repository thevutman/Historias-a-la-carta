'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture from '../../public/10.svg'

gsap.registerPlugin(ScrollTrigger)

export default function Section8() {
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
        markers: false,
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
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Década de 2000 – Resurgimiento Gastronómico</h2>
          <p className="text-xl text-center text-stone-900">
          La gastronomía de Santa Fe de Antioquia experimentó un resurgimiento a principios del siglo XXI, con un enfoque en la sostenibilidad y el uso de productos locales. La ciudad se convirtió en un destino gastronómico reconocido en Colombia, atrayendo a visitantes interesados ​​en probar platos tradicionales y contemporáneos.
          </p>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">2010s – Turismo Gastronómico y Cocina de Autor</h2>
          <p className="text-xl text-center text-stone-900">
          En la década de 2010, el turismo gastronómico cobró mayor importancia, con la apertura de restaurantes que ofrecían una cocina de autor, fusionando lo tradicional con lo moderno. La Semana Gastronómica de Santa Fe de Antioquia se convirtió en un evento destacado en el calendario cultural y turístico de la ciudad.
          </p>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/6 mb-8 md:mb-0 order-1">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">2020s – Preservación y Agricultura Sostenible</h2>
          <p className="text-xl text-stone-900">
          En la década de 2020, el interés por preservar la herencia culinaria de la región se mantuvo, a través de programas educativos y talleres que enseñaban las técnicas de cocina tradicional. Al mismo tiempo, se promovieron prácticas agrícolas sostenibles para garantizar la conservación de los ingredientes locales y apoyar la biodiversidad de la región.
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
    </div>
  )
}