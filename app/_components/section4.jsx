'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture1 from '../../public/5.svg'

gsap.registerPlugin(ScrollTrigger)

export default function EnhancedImageSection() {

  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const paragraphRef = useRef(null)
  const section2Ref = useRef(null)
  const image2Ref = useRef(null)
  const paragraph2Ref = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const paragraph = paragraphRef.current
    const section2 = section2Ref.current
    const image2 = image2Ref.current
    const paragraph2 = paragraph2Ref.current

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-white text-stone-900">
      <div ref={sectionRef} className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">En las décadas,</h2>
          <p ref={paragraphRef} className='text-xl text-stone-900 opacity-0'>En las décadas de 1620 a 1640, la llegada de esclavos africanos a la región trajo consigo una nueva influencia culinaria. Estos esclavos africanos introdujeron el plátano y la yuca como alimentos básicos, los cuales rápidamente se integraron a la dieta local. Además, ingredientes como el maíz, la papa y los frijoles comenzaron a utilizarse para preparar sopas contundentes como el sancocho, una mezcla de carnes con tubérculos. Platos típicos de esta época incluyen el sancocho, los plátanos fritos y guisos de yuca.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image ref={imageRef} src={picture1} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div ref={paragraph2Ref} className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center justify-between opacity-0">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <p className='text-xl text-stone-900'>A partir de la década de 1650, los conventos religiosos empezaron a desempeñar un papel crucial en la gastronomía de la región. Las monjas de los conventos desarrollaron recetas dulces que han perdurado a lo largo del tiempo, como el arequipe y conservas de frutas hechas con productos locales. Estas recetas no solo se convirtieron en una parte integral de la gastronomía local, sino que también se transmitieron de generación en generación, asegurando su preservación. Entre los dulces y postres de esta época se destacan el arequipe y las conservas de guayaba y otros frutos tropicales.</p>
        </div>
        <div className="md:w-3/6 mb-8 md:mb-0">
          <p className='text-xl text-stone-900'>En 1675, el cacao comenzó a cultivarse en la región, lo que permitió la producción de chocolate. Este ingrediente se utilizaba tanto en bebidas como en postres, y rápidamente se convirtió en un lujo en las mesas antioqueñas. Los platos y bebidas destacadas de esta época incluyen el chocolate caliente, las tortas de cacao y los dulces de chocolate.</p>
        </div>
      </div>
    </div>
  )
}