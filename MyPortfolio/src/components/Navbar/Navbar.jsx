import React from 'react'
import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub, FaLinkedin} from 'react-icons/fa'


const Navbar = () => {


  const menuItems =[
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"education", label:"Education"},
    // {id:"contact", label:"Contact"},
    {id:"experience", label:"Experience"},
    {id:"work", label:"Work"},];
    
  return (
    <nav className="bg-transparent">
     <div className='text-white py-5 flex justify-between items-center'>
      <div className='text-5xl font-semibold relative cursor-pointer'>
      <span className='text-[#8245ec]'>&lt;</span>
      <span className='text-white'>Simran</span>
      <span className='text-[#8245ec]'>/</span>
      <span className='text-[#8245ec]'>Verma</span>
      <span className='text-[#8245ec]'>&gt;</span>
      </div>

       <ul className='md:flex space-x-8 text-gray-300'>

        {menuItems.map((item) =>{
          <li key ={item.id} className=" ">
            <button>
              {item.label}
            </button>
          </li>
        })}
       </ul>

        </div>
    </nav>
  )
}

export default Navbar