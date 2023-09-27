import React from 'react'
import { faqs } from './../../assets/data/faqs.js'
import FaqItem from './FaqItem'

const FaqsList = () => {
  return (
    <ul className='mt-[38px]'>
      {faqs.map((item, index) => {
        return <FaqItem item={item} key={index} />
      })}
    </ul>
  )
}

export default FaqsList
