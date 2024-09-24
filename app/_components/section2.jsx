import React from 'react'
import Image from 'next/image'
import img2 from '../../public/2.svg'
import img3 from '../../public/3.svg'

function section2() {
  return (
    <div className='p-6 h-screen flex flex-col items-center justify-between'>
        <div className="flex justify-center items-center gap-6">
          <div className="">
              <Image src={img2} className='max-w-3xl'></Image>
          </div>
          <div className="flex justify-center items-center p-6 md:flex-col">
              <p>Con la llegada de los españoles en 1541, Jorge Robledo fundó la ciudad de Santa Fe de Antioquia. Los colonizadores trajeron consigo no solo su cultura, sino también una amplia gama de ingredientes y técnicas culinarias que transformaron la dieta local de manera significativa. Entre los ingredientes introducidos se encontraba el trigo, que revolucionó la elaboración de pan en la región. Junto con el trigo, llegaron el ganado vacuno, porcino y aviar, lo que diversificó enormemente la disponibilidad de carnes y productos lácteos en la región. Otros ingredientes que hicieron su entrada fueron el arroz, las lentejas, los garbanzos, y especias como el comino, el clavo y la canela.</p>
              <p>Las técnicas culinarias europeas también llegaron con los españoles. Entre ellas se destacó el horneado de pan, que cambió la forma en que los productos de trigo eran preparados. Además, los españoles introdujeron el uso de especias para sazonar las carnes, lo que mejoró los métodos de preparación de alimentos en la región.</p>
          </div>
        </div>
        <div className="">
          <Image src={img3} className='max-w-3xl'></Image>
        </div>
    </div>
  )
}

export default section2