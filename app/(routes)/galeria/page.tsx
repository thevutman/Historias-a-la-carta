'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import pic1 from '../../../public/11.jpg'
import pic2 from '../../../public/12.jpg'
import pic3 from '../../../public/13.jpg'
import pic4 from '../../../public/14.jpg'
import pic5 from '../../../public/15.jpg'
import pic6 from '../../../public/16.jpg'
// import pic1 from '../../../public/11.jpg'
// import pic1 from '../../../public/11.jpg'
// import pic1 from '../../../public/11.jpg'

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)

  const images = [
    { src: pic1, alt: 'Imagen 1 de la galería' },
    { src: pic2, alt: 'Imagen 2 de la galería' },
    { src: pic3, alt: 'Imagen 6 de la galería' },
    { src: pic4, alt: 'Imagen 3 de la galería' },
    { src: pic5, alt: 'Imagen 4 de la galería' },
    { src: pic6, alt: 'Imagen 5 de la galería' },
  ]

  const handleImageClick = useCallback((index: number) => {
    // alert('Image click')
    setSelectedImage(index)
    setIsZoomed(false)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedImage(null)
    setIsZoomed(false)
  }, [])

  const handlePrev = useCallback(() => {
    setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1))
    setIsZoomed(false)
  }, [images.length])

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0))
    setIsZoomed(false)
  }, [images.length])

  const toggleZoom = useCallback(() => {
    setIsZoomed((prev) => !prev)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) =>(
            <div key={index} className='relative aspect-w-3 aspect-h-2 h-52 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105'>
              <Image src={image.src} alt={image.alt} layout='fill' onClick={() => handleImageClick(index)} objectFit='cover' className='transition-transform duration-300 ease-in-out hover:scale-110'></Image>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className={`max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
              }`}
              onClick={toggleZoom}
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
        </div>
      )}
    </div>
  )
}

export default GallerySection