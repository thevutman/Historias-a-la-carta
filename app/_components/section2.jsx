'use client'

import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import picture2 from '../../public/3.svg'
import picture1 from '../../public/2.svg'

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
    // <div ref={sectionRef} className="flex flex-col items-center justify-center bg-white">
    //   <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    //     <div className="md:w-3/6 mb-8 md:mb-0">
    //       <h2 className="text-4xl font-bold text-stone-900 mb-4">Los Nutabes, </h2>
    //       <p ref={paragraphRef} className="text-xl text-stone-900 opacity-0">
    //       tribus originarias de la región de lo que hoy es Santa Fe de Antioquia, basaban su alimentación en productos autóctonos como el maíz, la yuca, la batata, los frijoles y diversas frutas como el aguacate y el guanábano. Estas frutas se consumían crudas, mientras que los tubérculos se hervían y las proteínas se obtenían principalmente de animales silvestres y peces capturados en los ríos cercanos. La preparación de estos alimentos se realizaba al aire libre, cocinados en fogones. Las técnicas de cocción utilizadas por los Nutabes eran sencillas, como el asado directo al fuego, mientras que las vasijas de barro eran fundamentales para hervir los alimentos. Entre los platos destacados de esta época se encontraban las arepas de maíz simples, tubérculos hervidos y frutas crudas.
    //       </p>
    //     </div>
    //     <div className="md:w-3/6 flex justify-center">
    //       <div className="relative w-5/6 h-80">
    //         <Image
    //           ref={imageRef}
    //           src={picture1}
    //           alt="Enhanced Image"
    //           layout="fill"
    //           objectFit="cover"
    //           className="rounded-lg shadow-xl opacity-0"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    //     <div className="md:w-3/6 mb-8 md:mb-0">
    //       <h2 className="text-4xl font-bold text-stone-900 mb-4">Los Nutabes, </h2>
    //       <p ref={paragraphRef} className="text-xl text-stone-900 opacity-0">
    //       tribus originarias de la región de lo que hoy es Santa Fe de Antioquia, basaban su alimentación en productos autóctonos como el maíz, la yuca, la batata, los frijoles y diversas frutas como el aguacate y el guanábano. Estas frutas se consumían crudas, mientras que los tubérculos se hervían y las proteínas se obtenían principalmente de animales silvestres y peces capturados en los ríos cercanos. La preparación de estos alimentos se realizaba al aire libre, cocinados en fogones. Las técnicas de cocción utilizadas por los Nutabes eran sencillas, como el asado directo al fuego, mientras que las vasijas de barro eran fundamentales para hervir los alimentos. Entre los platos destacados de esta época se encontraban las arepas de maíz simples, tubérculos hervidos y frutas crudas.
    //       </p>
    //     </div>
    //     <div className="md:w-3/6 flex justify-center">
    //       <div className="relative w-5/6 h-80">
    //         <Image
    //           ref={imageRef}
    //           src={picture2}
    //           alt="Enhanced Image"
    //           layout="fill"
    //           objectFit="cover"
    //           className="rounded-lg shadow-xl opacity-0"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center gap-20 bg-white text-stone-900">
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0 order-1">
          <h2 className='text-4xl font-bold text-stone-900 mb-4'>Con la llegada de los españoles</h2>
          <p className='text-xl text-stone-900'>en 1541, Jorge Robledo fundó la ciudad de Santa Fe de Antioquia. Los colonizadores trajeron consigo no solo su cultura, sino también una amplia gama de ingredientes y técnicas culinarias que transformaron la dieta local de manera significativa. Entre los ingredientes introducidos se encontraba el trigo, que revolucionó la elaboración de pan en la región. Junto con el trigo, llegaron el ganado vacuno, porcino y aviar, lo que diversificó enormemente la disponibilidad de carnes y productos lácteos en la región. Otros ingredientes que hicieron su entrada fueron el arroz, las lentejas, los garbanzos, y especias como el comino, el clavo y la canela.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="relative w-5/6">
            <Image src={picture1} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
      <div className="h-screen max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-3/6 mb-8 md:mb-0">
          <p className='text-xl text-stone-900'>Las técnicas culinarias europeas también llegaron con los españoles. Entre ellas se destacó el horneado de pan, que cambió la forma en que los productos de trigo eran preparados. Además, los españoles introdujeron el uso de especias para sazonar las carnes, lo que mejoró los métodos de preparación de alimentos en la región.</p>
        </div>
        <div className="md:w-3/6 flex justify-center">
          <div className="w-5/6">
            <Image src={picture2} className='' alt='hola'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}