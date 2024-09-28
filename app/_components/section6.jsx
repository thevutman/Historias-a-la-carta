'use client'

import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture1 from '../../public/8.svg'

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
          <h2 className="text-4xl font-bold text-stone-900 mb-4">A principios del siglo XIX,</h2>
          <p className='text-xl text-stone-900'>con la independencia de Colombia, se desarrolló una mayor conciencia de la identidad regional en Antioquia. Esto se reflejó en la cocina, que adoptó una mezcla de influencias indígenas, africanas y españolas. Durante las décadas de 1810 a 1820, surgieron platos tradicionales como el mondongo, el fríjol con garra y el tamal antioqueño. Estos platos representaban la diversidad cultural de la región y su rica herencia gastronómica.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image src={picture1} className=''></Image>
          </div>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
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