import React from 'react'
import { Link } from 'react-router-dom'
import ErrorPhoto from '../img/error.jpg'
import '../components/Error404.css'

export default function Error404() {
  return (
    <div className='error-container'>
        <img src={ErrorPhoto} alt='Error_404'/>
        <p className='back'>Do you want to go back to the login? <Link className='back-link' to='/Fake-social-media/login'>Go to login</Link></p>
    </div>
  )
}
