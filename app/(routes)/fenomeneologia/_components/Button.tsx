'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface PDFDownloadButtonProps {
  pdfUrl: "https://drive.google.com/uc?id=1o8aHbswX_RLgpt01eVVl0yzpvW3ktj1j&export=download"
  // fileName: "fenomenologia.pdf"s
}

export default function PDFDownloadButton({ pdfUrl }: PDFDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch(pdfUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = "https://drive.google.com/uc?id=1o8aHbswX_RLgpt01eVVl0yzpvW3ktj1j&export=download"
      link.download = "Fenomenologia"
      document.body.appendChild(link)
      link.click()
      link.parentNode?.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading the file:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button 
      onClick={handleDownload} 
      disabled={isDownloading}
      className="flex items-center space-x-2 m-20"
    >
      <Download className="w-4 h-4" />
      <span>{isDownloading ? 'Descargando...' : 'Descargar PDF'}</span>
    </Button>
  )
}