'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture1 from '../../public/8.svg'

gsap.registerPlugin(ScrollTrigger)

export default function EnhancedImageSection() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const paragraphRef = useRef(null)
  const section2Ref = useRef(null)
  const image2Ref = useRef(null)
  const paragraph2Ref = useRef(null)
  const paragraph3Ref = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const paragraph = paragraphRef.current
    const section2 = section2Ref.current
    const image2 = image2Ref.current
    const paragraph2 = paragraph2Ref.current
    const paragraph3 = paragraph3Ref.current

    gsap.to(image, {
      x: -50,
      y: 50,
      scale: 1.1,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'play none none none',
      },
    })

    gsap.to(paragraph, {
      y: 50,
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'play none none none',
      },
    })
    gsap.to(paragraph2, {
      y: 50,
      opacity: 1,
      scrollTrigger: {
        trigger: section2,
        start: 'top center',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'play none none none',
      },
    })
    gsap.to(image2, {
      x: 50,
      y: 50,
      scale: 1.1,
      scrollTrigger: {
        trigger: section2,
        start: 'top center',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'play none none none',
      },
    })

    gsap.to(paragraph3, {
      y: 50,
      opacity: 1,
      scrollTrigger: {
        trigger: paragraph3,
        start: 'top center',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-white text-stone-900">
      <div ref={sectionRef} className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0 order-1">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">A principios del siglo XIX,</h2>
          <p ref={paragraphRef} className='text-xl text-stone-900 opacity-0'>con la independencia de Colombia, se desarrolló una mayor conciencia de la identidad regional en Antioquia. Esto se reflejó en la cocina, que adoptó una mezcla de influencias indígenas, africanas y españolas. Durante las décadas de 1810 a 1820, surgieron platos tradicionales como el mondongo, el fríjol con garra y el tamal antioqueño. Estos platos representaban la diversidad cultural de la región y su rica herencia gastronómica.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image ref={imageRef} src={picture1} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div ref={paragraph3Ref} className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between opacity-0">
        <div className="md:w-5/12 mb-8 md:mb-0">
          <p className='text-xl text-center text-stone-900'>En la década de 1830, la apertura de caminos y el intercambio comercial con otras regiones permitió la introducción de nuevos ingredientes como la papa, la cebolla y el ajo, los cuales fueron rápidamente integrados a la cocina local. Estos ingredientes eran utilizados en sopas y guisos, mejorando la variedad y el sabor de los platos locales.</p>
        </div>
        <div className="md:w-5/12 mb-8 md:mb-0">
          <p className='text-xl text-center text-stone-900'>Durante las décadas de 1860 a 1880, la incipiente industrialización en Antioquia impulsó la intensificación de la producción agrícola, lo que facilitó el acceso a productos como el café y el cacao. Estos productos se convirtieron en elementos básicos de la dieta diaria, con el café antioqueño y el chocolate de cacao local como bebidas icónicas de la región.</p>
        </div>
      </div>
    </div>
  )
}