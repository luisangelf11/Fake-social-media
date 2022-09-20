import React from 'react'
import '../components/Profile.css'

export default function Profile({username, urlImg}) {
  return (
    <div className='box-profile'>
        <img src={urlImg} alt='profile'/>
        <h2>Welcome</h2>
        <p>{username}</p>
    </div>
  )
}
