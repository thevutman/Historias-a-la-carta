'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HistoricalTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const sections = gsap.utils.toArray<HTMLElement>(container.querySelectorAll('section'))

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + container.offsetWidth,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="h-screen">
      <div ref={containerRef} className="flex h-full">
        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-blue-500 text-white">
          <h2 className="text-4xl font-bold">Década de 1900-1920</h2>
          <p className="mt-4 max-w-lg text-center">
            La llegada de los electrodomésticos cambió la forma de preparar los alimentos, facilitando procesos como el horneado y la cocción. Sin embargo, en las áreas rurales se mantuvieron muchas de las técnicas tradicionales.
          </p>
        </section>
        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-green-500 text-white">
          <h2 className="text-4xl font-bold">Década de 1940</h2>
          <p className="mt-4 max-w-lg text-center">
            Durante la Segunda Guerra Mundial, la escasez de algunos productos llevó a la adaptación de muchas recetas locales. A pesar de esto, la bandeja paisa permaneció como un plato central en la dieta antioqueña.
          </p>
        </section>
        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-yellow-500 text-white">
          <h2 className="text-4xl font-bold">Décadas de 1950-1960</h2>
          <p className="mt-4 max-w-lg text-center">
            Con la mejora de las infraestructuras en Santa Fe de Antioquia, la ciudad se abrió al turismo. Este auge turístico provocó un renovado interés en la cocina local, y las recetas tradicionales comenzaron a documentarse y rescatarse.
          </p>
        </section>
        <section className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-red-500 text-white">
          <h2 className="text-4xl font-bold">1970s-1980s</h2>
          <p className="mt-4 max-w-lg text-center">
            A partir de los años 70, comenzaron a celebrarse los primeros festivales gastronómicos en la región, dedicados a la preservación de la cocina antioqueña. Platos como el arroz con leche y las sopas locales ganaron reconocimiento.
          </p>
        </section>
      </div>
    </div>
  )
}

export default HistoricalTimeline