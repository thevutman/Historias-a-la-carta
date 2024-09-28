'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import pictur1 from '../../../public/11.jpg'
import pictur2 from '../../../public/12.jpg'
import pictur3 from '../../../public/13.jpg'
import pictur4 from '../../../public/14.jpg'
import pictur5 from '../../../public/15.jpg'
import pictur6 from '../../../public/16.jpg'

const GallerySection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)

  const images = [
    { src: pictur1, alt: 'Imagen 1 de la galería' },
    { src: pictur2, alt: 'Imagen 1 de la galería' },
    { src: pictur3, alt: 'Imagen 1 de la galería' },
    { src: pictur4, alt: 'Imagen 1 de la galería' },
    { src: pictur5, alt: 'Imagen 1 de la galería' },
    { src: pictur6, alt: 'Imagen 1 de la galería' },
  ]

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    setIsZoomed(false)
  }

  const handleClose = () => {
    setSelectedImage(null)
    setIsZoomed(false)
  }

  const handlePrev = () => {
    setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
    setIsZoomed(false)
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div ref={ref} className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Image src={pictur1} alt='' className='transition-transform duration-300 ease-in-out transform hover:scale-110'></Image>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-w-3 aspect-h-2 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className={`max-w-full max-h-full object-contain ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={toggleZoom}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isZoomed ? 1.5 : 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleClose}
                aria-label="Cerrar galería"
              >
                <X size={24} />
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handlePrev}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleNext}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

GallerySection.displayName = 'GallerySection'

export default GallerySection