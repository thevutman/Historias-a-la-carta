import React from 'react'
import Link from 'next/link'

function encuestas() {
  return (
    <div>
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
      
    </div>
  )
}

export default encuestas