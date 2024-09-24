import React from 'react'
import Link from 'next/link'

function seccionario() {
  return (
    <div className='h-screen grid place-items-center'>
        <div className="flex flex-col md:flex-row gap-3">
            <Link href={'/mapeo'}><p className="border border-white border-solid text-center w-80 md:border-none md:w-auto md:after:content-['|'] md:after:pl-4">MAPEO</p></Link>
            <Link href={'/fenomeneologia'}><p className="border border-white border-solid text-center w-80 md:border-none md:w-auto md:after:content-['|'] md:after:pl-4">FENOMENOLOGÍA</p></Link>
            <Link href={'/recetario'}><p className="border border-white border-solid text-center w-80 md:border-none md:w-auto md:after:content-['|'] md:after:pl-4">RECETARIO</p></Link>
            <Link href={'/encuestas'}><p className="border border-white border-solid text-center w-80 md:border-none md:w-auto md:after:content-['|'] md:after:pl-4">ENCUESTAS</p></Link>
            <Link href={'/galeria'}><p className="border border-white border-solid text-center w-80 md:border-none md:w-auto">GALERIA</p></Link>
        </div>
    </div>
  )
}

export default seccionario