import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome, AiFillMessage,AiFillSetting} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
import {IoIosNotifications} from 'react-icons/io'
import {RiLogoutBoxRFill} from 'react-icons/ri'
import { useAuth } from '../context/AuthProvider'
import '../components/Menu.css'

export default function Menu() {
    const {logout} = useAuth();
    const handleSignOut=async ()=>{
        await logout();
    }
  return (
    <div className='menu'>
        <h2>Menu</h2>
        <nav>
            <Link to="/" className='btn'><AiFillHome className='icon'></AiFillHome> <span>Home</span></Link>
            <Link className='btn'><FaSearch className='icon'></FaSearch> <span>Explore</span></Link>
            <Link className='btn'><IoIosNotifications className='icon'></IoIosNotifications> <span>Notifications</span></Link>
            <Link className='btn'><AiFillMessage className='icon'></AiFillMessage> <span>Messages</span></Link>
            <Link className='btn'><AiFillSetting className='icon'></AiFillSetting> <span>Settings</span></Link>
            <Link className='btn' onClick={handleSignOut}><RiLogoutBoxRFill className='icon'></RiLogoutBoxRFill> <span>SignOut</span></Link>
        </nav>
    </div>
  )
}
