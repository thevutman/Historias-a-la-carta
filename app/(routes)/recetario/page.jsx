'use client'
import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Book } from 'lucide-react'

function recetario() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-stone-900">
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
      <motion.div
        className="text-center bg-black bg-opacity-40 p-12 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Book className="w-16 h-16 mx-auto mb-6 text-white" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Estamos trabajando en el recetario</h2>
        <p className="text-xl text-gray-600 mb-8">
          Pronto podrás explorar una colección de recetas tradicionales de los Nutabes.
          ¡Vuelve pronto para descubrir los sabores ancestrales!
        </p>
        <motion.div
          className="w-16 h-16 border-t-4 border-white border-solid rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  )
}

export default recetario