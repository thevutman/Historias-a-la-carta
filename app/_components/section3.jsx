'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture1 from '../../public/4.svg'

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
          <h2 className="text-4xl font-bold text-stone-900 mb-4">En las décadas siguientes,</h2>
          <p ref={paragraphRef} className='text-xl text-stone-900'>entre los años 1540 y 1560, los españoles comenzaron a cultivar caña de azúcar en la región. Este cultivo trajo consigo la producción de dos productos esenciales para la gastronomía local: la panela y el guarapo. La panela, un tipo de azúcar sin refinar, se utilizaba como endulzante en una amplia variedad de bebidas y postres. Por otro lado, el guarapo, una bebida alcohólica hecha a partir de la caña de azúcar, se convirtió en un elemento fundamental de la cultura gastronómica local.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image ref={imageRef} src={picture1} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center ">
        <div className="md:w-2/4 mb-8 md:mb-0">
          <p className='text-xl text-stone-900'>Con la creciente producción de ganado vacuno y porcino, se introdujeron nuevos métodos de preparación de carnes. Los asados y las frituras comenzaron a ser más comunes en la dieta local, ofreciendo una variedad de formas de consumir las carnes disponibles. Los productos destacados de esta época incluyen el guarapo, la panela, la carne de cerdo y vaca, así como los panes de trigo.</p>
        </div>
      </div>
    </div>
  )
}