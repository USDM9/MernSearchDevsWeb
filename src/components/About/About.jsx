import React from 'react'
import aboutImg from './../../assets/images/about.png'
import aboutCardImg from './../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/* === img === */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt='' />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-15%] md:right-[-7%] lg:right-[15%]'>
              <img src={aboutCardImg} alt='' />
            </div>
          </div>
          {/* === about content === */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Dejanos tus requerimentos</h2>
            <p className='text__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum temporibus dolore cumque. Minima nesciunt sit veniam modi sequi inventore Lorem ipsum dolor sit amet</p>

            <p className='text__para mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum temporibus dolore cumque. Minima nesciunt sit veniam modi sequi inventore Lorem ipsum dolor sit</p>

            <Link to='/'>
              <button className='btn'>Ver mas</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
