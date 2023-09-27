import React from 'react'
import starIcon from './../../assets/images/Star.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const DevCard = ({ dev }) => {
  const {
    id,
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    totalProjects,
    country,
    lastCompany
  } = dev

  return (
    <div className='p-3 lg:p-5 w-full '>
      <div className='w-full'>
        <img src={photo} alt='' className='w-full' />
      </div>
      <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg-5 '>
        {name} - <span className='text-[20px] leading-[30px] font-[600]
        text-yellowColor'
                 >      {country}
        </span>
      </h2>
      <div className='mt-2 lg:mt-4 flex items-center justify-between'>
        <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[12px] lg:leading-7 font-semibold rounded '>
          {specialty}
        </span>
        <div className=' flex items-center gap-[6px]'>
          <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
            <img src={starIcon} alt='' />  {avgRating}
          </span>
          <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
            ({totalRating})
          </span>

        </div>

      </div>
      <div className='mt-[18px] lg:mt-5 flex items-center justify-between '>
        <div>
          <h3 className='text-[16px] leading-7 lg-text-[18px] lg-leading-[30px] font-semibold text-headingColor'>
            +{totalProjects} Proyectos
          </h3>
          <p className=' text-[14px] leading-6 font-[400] text-textColor'>
            <strong>Ultima Compania: </strong> {lastCompany}
          </p>
        </div>

        <Link to={`/developers/${id}`} className='w-[40px] h-[40px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-yellowColor hover:border-none'>
          <BsArrowRight className='w-6 group-hover:text-white' />
        </Link>
      </div>

    </div>
  )
}

export default DevCard
