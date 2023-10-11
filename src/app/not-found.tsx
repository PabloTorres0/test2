import ButtonBack from '@/components/ButtonBack'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className="grid gap-4">
    <h1 className="text-center text-2xl">404</h1>
    <div className="text-center">
      <ButtonBack>Regresar</ButtonBack>
    </div>
  </div>
  )
}

export default notFound