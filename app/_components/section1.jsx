import React from 'react'
import Image from 'next/image'
import img1 from '../../public/1.jpg'

function section1() {
  return (
    <div className='h-screen grid place-items-center'>
        <div className="flex flex-col justify-center items-center gap-12 p-6 w-full lg:flex-row lg:justify-evenly max-w-screen-xl">
          <div className="">
              <p className='text-base md:text-lg'>Los Nutabes, tribus originarias de la región de lo que hoy es Santa Fe de Antioquia, basaban su alimentación en productos autóctonos como el maíz, la yuca, la batata, los frijoles y diversas frutas como el aguacate y el guanábano. Estas frutas se consumían crudas, mientras que los tubérculos se hervían y las proteínas se obtenían principalmente de animales silvestres y peces capturados en los ríos cercanos. La preparación de estos alimentos se realizaba al aire libre, cocinados en fogones. Las técnicas de cocción utilizadas por los Nutabes eran sencillas, como el asado directo al fuego, mientras que las vasijas de barro eran fundamentales para hervir los alimentos. Entre los platos destacados de esta época se encontraban las arepas de maíz simples, tubérculos hervidos y frutas crudas.</p>
          </div>
          <div className="">
              <Image src={img1} className='max-w-3xl'></Image>
          </div>
        </div>
    </div>
  )
}

export default section1