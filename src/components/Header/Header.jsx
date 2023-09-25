import { useEffect, useState } from 'react'
import logo from './../../assets/images/logo.png'
import userImg from './../../assets/images/client-avatar.png'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Buscar Dev',
    path: '/developers'
  },
  {
    name: 'Servicios',
    path: '/services'
  },
  {
    name: 'Contacto',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* === LOGO === */}
          <div>
            <img src={logo} alt='' />
          </div>

          {/* === MENU === */}
          <nav className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navClass =>
                      navClass.isActive
                        ? 'text-yellowColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-yellowColor'}
                  >{link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* === MENU right=== */}

          <nav className='flex items-center gap-4'>
            <div>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} alt='' className='w-full rounded-full' />
                </figure>
              </Link>
            </div>
            <div>
              <Link to='/login'>
                <button className='bg-yellowColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  login
                </button>
              </Link>

              <span className='md:hidden' />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
