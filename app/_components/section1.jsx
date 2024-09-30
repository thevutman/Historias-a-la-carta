'use client'

// import React, { useEffect, useRef } from 'react'
import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture from '../../public/1.svg'

gsap.registerPlugin(ScrollTrigger)

export default function Section1() {
  // const sectionRef = useRef(null)
  // const imageRef = useRef(null)
  // const paragraphRef = useRef(null)

  // useEffect(() => {
  //   const section = sectionRef.current
  //   const image = imageRef.current
  //   const paragraph = paragraphRef.current

  //   gsap.to(image, {
  //     x: 50,
  //     y: 50,
  //     scale: 1.1,
  //     scrollTrigger: {
  //       trigger: section,
  //       start: 'top center',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       toggleActions: 'play none none none',
  //     },
  //   })

  //   gsap.to(paragraph, {
  //     y: 50,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: section,
  //       start: 'top center',
  //       end: 'bottom bottom',
  //       scrub: true,
  //       toggleActions: 'play none none none',
  //     },
  //   })

  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  //   }
  // }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">Los Nutabes, </h2>
          <p className="text-xl text-stone-900">
          tribus originarias de la región de lo que hoy es Santa Fe de Antioquia, basaban su alimentación en productos autóctonos como el maíz, la yuca, la batata, los frijoles y diversas frutas como el aguacate y el guanábano. Estas frutas se consumían crudas, mientras que los tubérculos se hervían y las proteínas se obtenían principalmente de animales silvestres y peces capturados en los ríos cercanos. La preparación de estos alimentos se realizaba al aire libre, cocinados en fogones. Las técnicas de cocción utilizadas por los Nutabes eran sencillas, como el asado directo al fuego, mientras que las vasijas de barro eran fundamentales para hervir los alimentos. Entre los platos destacados de esta época se encontraban las arepas de maíz simples, tubérculos hervidos y frutas crudas.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full">
            <Image
              src={picture}
              alt="Enhanced Image"
              objectFit="cover"
              className="w-[80vw]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}