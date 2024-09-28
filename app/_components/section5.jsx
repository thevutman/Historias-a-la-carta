'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture2 from '../../public/7.svg'
import picture1 from '../../public/6.svg'

gsap.registerPlugin(ScrollTrigger)

export default function EnhancedImageSection() {

  // useEffect(() => {
  //   const section = sectionRef.current
  //   const image = imageRef.current
  //   const paragraph = paragraphRef.current

  //   gsap.to(image, {
  //     scale: 1,
  //     rotation: 0,
  //     opacity: 1,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: section,
  //       markers: false,
  //       start: 'top center',
  //       end: 'bottom, bottom',
  //       scrub: false,
  //       toggleActions: 'play none none reverse',
  //     },
  //   })

  //   gsap.to(paragraph, {
  //     y: 50,
  //     opacity: 1,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: section,
  //       start: 'top center',
  //       end: 'bottom bottom',
  //       markers: true,
  //       scrub: false,
  //       toggleActions: 'play none none reverse',
  //     },
  //   })

  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   }
  // }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-white text-stone-900">
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0 order-1">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Durante el siglo XVIII,</h2>
          <p className='text-xl text-stone-900'>la ciudad de Santa Fe de Antioquia creció como un importante centro administrativo y comercial. Este crecimiento económico y social trajo consigo una diversificación de la gastronomía local, con influencias de otras regiones del Virreinato de la Nueva Granada. Platos como las empanadas y los tamales se adaptaron a los ingredientes locales, como el maíz y el plátano. En particular, las empanadas de carne y papa y los tamales envueltos en hojas de plátano ganaron popularidad.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image src={picture1} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <p className='text-xl text-stone-900'>A partir de la década de 1750, la producción de derivados de la leche comenzó a expandirse. Se integraron técnicas españolas para la elaboración de productos lácteos, adaptadas a las realidades locales. Así, surgieron productos como los quesos frescos, las natillas y los dulces de leche. La combinación de leche con azúcar de caña permitió la creación de postres cremosos que se convirtieron en una parte esencial de la dieta regional.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="w-5/6">
            <Image src={picture2} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center ">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <p className='text-center text-xl text-stone-900'>En las décadas de 1770, la producción de panela y aguardiente se consolidó como una actividad económica importante en la región. Estos productos no solo eran fundamentales para las festividades locales, sino que también se utilizaban en la preparación de bebidas y dulces tradicionales. El aguardiente de caña y los dulces con panela se convirtieron en elementos clave de la cultura gastronómica de Santa Fe de Antioquia.</p>
        </div>
      </div>
    </div>
  )
}