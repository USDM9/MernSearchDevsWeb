import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialMedia = [
  {
    icon: <AiFillYoutube />,
    link: 'https://www.youtube.com/'
  },

  {
    icon: <AiFillGithub />,
    link: 'https://github.com/'
  },

  {
    icon: <AiOutlineInstagram />,
    link: 'https://www.instagram.com/'
  },

  {
    icon: <RiLinkedinFill />,
    link: 'https://www.linkedin.com/'
  }
]

const navLinks01 = [
  {
    text: 'Inicio',
    path: '/home'
  },

  {
    text: 'Buscar Dev',
    path: '/developers'
  },

  {
    text: 'Contacto',
    path: '/contact'
  },

  {
    text: 'Services',
    path: '/services'
  }
]

const navLinks02 = [
  {
    text: 'Inicio',
    path: '/home'
  },

  {
    text: 'Contacto',
    path: '/contact'
  },

  {
    text: 'Services',
    path: '/services'
  }
]

const navLinks03 = [
  {
    text: 'Inicio',
    path: '/home'
  },

  {
    text: 'Buscar Dev',
    path: '/developers'
  }

]

const Footer = () => {
  return (
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} alt='' />
          <p className='text-[16px] leading-7 font-[400] text-headingColor'>
            Copyright {new Date().getFullYear()} USDM
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {
              socialMedia.map((media, index) => {
                return (
                  <Link to={media.link} key={index}>
                    {media.icon}
                  </Link>
                )
              })
            }
          </div>

        </div>
        <div>
          <h3 className='text-[20px] leading-[90px] font-[700] mb-6  text-headingColor'>Navegacion</h3>
          <ul>
            {navLinks01.map((navlink, index) => {
              return (
                <li className='mb-4' key={index}>
                  <Link to={navlink.path} className='text-[16px] leading-7 font-[400] text-headingColor'>
                    {navlink.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className='text-[20px] leading-[90px] font-[700] mb-6  text-headingColor'>Navegacion</h3>
          <ul>
            {navLinks02.map((navlink, index) => {
              return (
                <li className='mb-4' key={index}>
                  <Link to={navlink.path} className='text-[16px] leading-7 font-[400] text-headingColor'>
                    {navlink.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className='text-[20px] leading-[90px] font-[700] mb-6  text-headingColor'>Navegacion</h3>
          <ul>
            {navLinks03.map((navlink, index) => {
              return (
                <li className='mb-4' key={index}>
                  <Link to={navlink.path} className='text-[16px] leading-7 font-[400] text-headingColor '>
                    {navlink.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
