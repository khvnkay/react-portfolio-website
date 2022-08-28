import React from 'react'
import CV from '../../assets/cv.pdf'

export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>
            Download CV
        </a>
        <a href='#contact' className='btn btn-primary'>Let's Task</a>
    </div>
  )
}