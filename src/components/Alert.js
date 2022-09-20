import React from 'react'
import '../components/Alert.css'

export default function Alert({msj}) {
  return (
    <div className='alert'><p>{msj}</p></div>
  )
}
