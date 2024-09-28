'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import vista from '../../../public/VISTA.jpg'
import opcional from '../../../public/OPCIONAL.jpg'
import olor from '../../../public/OLOR.jpg'
import tacto from '../../../public/TACTO.jpg'
import tacto2 from '../../../public/TACTO2.jpg'

function Mapeo() {
  return (
    <div className='bg-gradient-to-r from-gray-950 to-stone-950'>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 bg-opacity-80 backdrop-blur-md shadow-md">
            <div className="flex items-center">
              <Link href={"/"} className='font-semibold text-2xl'>Historias a la Carta</Link>
            </div>
            <div>
              <Link href={"/"} className='font-medium text-lg'>Inicio</Link>
            </div>
          </div>
      </div>
      </nav>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-center justify-center'>
            <h2 className='text-5xl font-bold mt-20'>MAPEO SANTA FE DE ANTIOQUIA</h2>
            <div className="grid grid-cols-5 grid-rows-4 place-items-center">
              <h3 className='text-4xl font-bold col-start-2 col-end-5 content-center justify-center'>Vista</h3>
              <div className="p-6 col-start-4 col-end-6 row-start-2 row-end-4 w-10/12 h-10/12">
                <Image src={vista} className='rounded-sm' alt='hola'></Image>
              </div>
              <p className='px-8 col-start-1 col-end-4'>La plaza central de Santa Fe de Antioquia es un hervidero de vida, rodeada de edificios coloniales con fachadas blancas impecables y balcones de madera adornados con coloridas plantas y textiles que reflejan la esencia de la región. En los restaurantes y cafeterías al aire libre, las mesas se llenan de productos típicos: licores como el aguardiente Antioqueño y la candela, una bebida dulce de aguardiente y panela, junto a platos para compartir. Bandejas paisas rebosantes de frijoles, arroz, carne, chicharrón y arepas se convierten en el centro de atención, tentando a todos con su aroma hogareño.
              </p>
              <p className='px-8 col-start-1 col-end-4 row-start-2 row-end-3'>
              Los vendedores ambulantes no pasan desapercibidos, ofreciendo una variedad de dulces tradicionales. Entre ellos, los dulces de tamarindo, envueltos en papel, con su mezcla perfecta de acidez y dulzura que hace agua la boca. También hay cocadas, panelitas de leche, y alfajores, cada uno con su propio toque artesanal que rememora las tradiciones más queridas de la región.
              </p>
              <p className='px-8 col-start-1 col-end-6 self-start'>
              Las calles están llenas de restaurantes con propuestas que van desde las recetas más tradicionales hasta platos más modernos, con cada local ofreciendo una experiencia única. La gastronomía es el alma de la ciudad, y en cada esquina, se siente el vibrante espíritu culinario que define a Santa Fe de Antioquia.
              </p>
            </div>
            <div className="grid grid-cols-5 grid-rows-3 place-items-center">
              <h3 className='text-4xl font-bold col-start-2 col-end-5 content-center justify-center'>Sonido</h3>
              <p className='px-8 col-start-3 col-end-6'>El ambiente de la plaza está impregnado de los sonidos vibrantes que nacen de la preparación de la comida. Desde los restaurantes cercanos, se escucha el crujido agudo del aceite caliente al recibir los ingredientes frescos, como las arepas dorándose o los chicharrones chisporroteando. Este sonido es como un suave aplauso que celebra la cocina en su momento más vivo.
              </p>
              <div className="p-6 col-start-1 col-end-3 row-start-2 row-end-4 w-10/12 h-10/12">
                <Image src={opcional} className='rounded-sm' alt='hola'></Image>
              </div>
              <p className='px-8 col-start-3 col-end-6'>
              El golpeteo rítmico de los cuchillos contra las tablas de cortar resuena como un metrónomo en la sinfonía de la plaza. Los chefs pican cebollas, ajos y tomates, el &quot;toc-toc-toc&quot; rápido y preciso acompaña el murmullo de las conversaciones.Cada tanto, se oye el silbido agudo del vapor escapando de una olla, señal de que un guiso o una sopa se está cocinando a fuego lento. Este sonido se mezcla con el zumbido constante de las parrillas, donde las carnes sueltan su jugo al entrar en contacto con el calor, produciendo un siseo inconfundible que hace agua la boca. El revolver de una cuchara metálica en una olla de sancocho, con su sonido característico de raspado, acompaña el suave golpeteo de las tapas siendo levantadas para revisar el punto exacto de cocción  
              </p>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 place-items-center">
              <h3 className='text-4xl font-bold col-start-2 col-end-5 content-center justify-center'>Olor</h3>
              <p className='px-8 col-start-1 col-end-4'>El aire en Santa Fe de Antioquia está impregnado de aromas que cuentan historias de tradición. El guiso de frijoles, cocido a fuego lento con tocino y plátano maduro, llena el ambiente con un olor ahumado y especiado que reconforta el alma. A su lado, el dulce perfume del tamarindo y las panelitas de leche se mezclan, creando una fragancia nostálgica y envolvente. El bocachico frito aporta su aroma salado y ahumado, que se equilibra con el frescor del cilantro recién picado.
              </p>
              <div className="p-6 col-start-4 col-end-6 row-start-2 row-end-4 w-10/12 h-10/12">
                <Image src={olor} className='rounded-sm' alt='hola'></Image>
              </div>
              <p className='py-2 px-8 col-start-1 col-end-4'>
              El suave olor del arroz con coco añade un toque dulce y reconfortante, mientras el aroma terroso de los tamales antioqueños, envueltos en hojas de plátano, combina el maíz con la carne sazonada. Algunas versiones modernas, con champiñones o espinacas, aportan un toque de frescura que renueva este plato tradicional. El aroma amargo del café recién molido llena las calles, acompañando el perfume tostado de las arepas de chócolo cocinadas al carbón, que evocan la vida cotidiana de la región.
              </p>
              <p className='px-8 col-start-1 col-end-6 self-start'>
              Cerca de los puestos de frutas, el aire se refresca con las fragancias cítricas de naranjas, mangos y guayabas, cuya vitalidad contrasta con los olores más pesados de las carnes y guisos, creando una experiencia multisensorial que refleja la riqueza gastronómica de Santa Fe de Antioquia. Aquí, cada aroma despierta los sentidos y celebra la evolución de la cocina local, en una fusión perfecta entre tradición y modernidad.
              </p>
            </div>
            <div className="grid grid-cols-5 grid-rows-3 place-items-center">
              <h3 className='text-4xl font-bold col-start-2 col-end-5 content-center justify-center'>Tacto</h3>
              <p className='px-8 col-start-3 col-end-6'>Sentir la suavidad de una arepa recién hecha entre las manos es como tocar un trozo de tradición, cálida y tierna al tacto, con una ligera rugosidad que habla de la harina de maíz fresca. Al romperla, la textura esponjosa en su interior contrasta con su superficie dorada. Por otro lado, el chicharrón, con su piel crujiente y resistente, se deshace en una explosión de texturas, primero firme bajo los dedos y luego quebradizo en la boca, dejando una sensación única y adictiva. Cada plato es una invitación a explorar, no solo con el paladar, sino con el tacto, en un diálogo entre el comensal y la comida.
              </p>
              <div className="p-6 col-start-1 col-end-3 row-start-2 row-end-4 w-10/12 h-10/12">
                <Image src={tacto} className='rounded-sm' alt='hola'></Image>
              </div>
              <p className='px-8 col-start-3 col-end-6'>
              En los restaurantes, las mesas de madera pulida, cálidas y robustas al tacto, ofrecen un soporte firme mientras los dedos recorren los bordes lisos de los platos de barro y cerámica. El peso de una taza de café recién hecho, suave al sostenerla pero llena de la promesa del calor en su interior, es reconfortante; el vapor que sube se siente en los dedos, una pequeña caricia antes del primer sorbo. Cada plato llega acompañado de sensaciones táctiles que completan la experiencia: el peso de los cubiertos de metal frío y el toque suave de las servilletas de tela, agregando un aire rústico y acogedor que es parte fundamental de los restaurantes de Santa Fe.
              </p>
              <p className='px-8 py-4 col-start-1 col-end-6'>En las mesas al aire libre, el calor del sol antioqueño se mezcla con la frescura de la brisa que acaricia la piel, mientras se tocan los vasos fríos llenos de jugos de frutas frescas. El contacto con el vidrio frío, que humedece las manos por la condensación, se contrasta con el dulzor refrescante del tamarindo o el maracuyá que fluye por la garganta, dejando una sensación reconfortante y refrescante. Esta mezcla de calidez y frescura en el ambiente convierte cualquier comida al aire libre en una experiencia que involucra todos los sentidos.
              </p>
              <div className="p-6 col-start-4 col-end-6 row-start-5 row-end-7 w-10/12 h-10/12">
                <Image src={tacto2} className='rounded-sm' alt='hola'></Image>
              </div>
              <p className='px-8 col-start-1 col-end-4'>
              Las sillas de madera, con sus superficies ligeramente desgastadas, aportan una sensación táctil que se siente arraigada en la historia del lugar. Al sentarse en los bancos de la plaza o en las mesas de los restaurantes, el contacto con la madera sólida, trabajada por manos artesanas, evoca una conexión con el pasado. A lo largo de las calles empedradas, los pies sienten el relieve desigual de las piedras bajo las suelas, una constante recordatoria de la autenticidad y el carácter histórico de Santa Fe de Antioquia.
              </p>
              <p className='px-8 py-4 col-start-1 col-end-4'>
              En Santa Fe, cada textura cuenta una historia, desde el suave contacto de una hoja de plátano que envuelve un tamal, hasta la firmeza de un vaso de barro lleno de aguardiente. Todos estos elementos táctiles, junto a los sabores y aromas, hacen que la gastronomía local se disfrute con una intensidad multisensorial, convirtiendo cada visita en un momento inolvidable que toca profundamente a quienes lo experimentan.
              </p>
            </div>
        </div>
        <div className="">
            <p>imagenes caertografia</p>
        </div>
    </div>
  )
}

export default Mapeo