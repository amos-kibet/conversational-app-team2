import React from 'react'
import { Link } from 'react-router-dom'
import profile from "../../assets/profile.jpg"

const Sidebar = () => {
  return (
    <div className='bg-orange-500/80 w-64 text-white rounded-md
    p-4 flex items-center flex-col'>
        <img src={profile} alt="" className='h-16 w-16 rounded-full ' />

        <div className='text-center'>
            <h1 className='font-semibold text-lg'>mog.dev</h1>
            <p>Courses: 0 | Frontend Dev</p>

            <ul className='mt-10'>
                <li className='bg-orange-300 rounded-lg p-2'>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar