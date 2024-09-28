import React from 'react'
import Link from 'next/link'
import Button from './_components/Button'

function Fenomenologia() {
  return (
    <div className='bg-gradient-to-r from-gray-950 to-stone-950'>
        {/* <Link href={"/"}>No pienso poner eso</Link> */}
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
          <h2 className='text-5xl font-bold mt-20'>FENOMENOLOGÍA</h2>
          <p className='max-w-3xl mt-8 text-justify'>El documento presenta un análisis de la gastronomía de Santa Fe de Antioquia como un reflejo de su historia, tradiciones y relación con el entorno natural. Esta ciudad, fundada en 1541, se convirtió en un importante centro colonial, lo que influyó en su cocina con una mezcla de culturas indígenas, españolas y africanas. Actualmente, la gastronomía local sigue siendo un pilar cultural, aunque se ha visto afectada por la globalización y el turismo. El estudio se enfoca en seis fenómenos específicos: la conexión con la cocina colonial, el uso de ingredientes autóctonos, la transmisión del patrimonio cultural, la influencia del turismo, el impacto de la globalización y el uso del bienmesabe, un fruto local. A través de estos aspectos, se busca entender la evolución de la cocina local y los desafíos para su preservación, destacando la importancia de mantener las tradiciones culinarias en un contexto de cambio constante.</p>
          <Button></Button>
        </div>
    </div>
  )
}

export default Fenomenologia