'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture2 from '../../public/3.svg'
import picture1 from '../../public/2.svg'

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
        <div className="md:w-3/6 mb-8 md:mb-0 order-1">
          <h2 className='text-4xl font-bold text-stone-900 mb-4'>Con la llegada de los españoles</h2>
          <p ref={paragraphRef} className='text-xl text-stone-900 opacity-0'>en 1541, Jorge Robledo fundó la ciudad de Santa Fe de Antioquia. Los colonizadores trajeron consigo no solo su cultura, sino también una amplia gama de ingredientes y técnicas culinarias que transformaron la dieta local de manera significativa. Entre los ingredientes introducidos se encontraba el trigo, que revolucionó la elaboración de pan en la región. Junto con el trigo, llegaron el ganado vacuno, porcino y aviar, lo que diversificó enormemente la disponibilidad de carnes y productos lácteos en la región. Otros ingredientes que hicieron su entrada fueron el arroz, las lentejas, los garbanzos, y especias como el comino, el clavo y la canela.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image ref={imageRef} src={picture1} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div ref={section2Ref} className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <p ref={paragraph2Ref} className='text-xl text-stone-900'>Las técnicas culinarias europeas también llegaron con los españoles. Entre ellas se destacó el horneado de pan, que cambió la forma en que los productos de trigo eran preparados. Además, los españoles introdujeron el uso de especias para sazonar las carnes, lo que mejoró los métodos de preparación de alimentos en la región.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="w-5/6">
            <Image ref={image2Ref} src={picture2} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}