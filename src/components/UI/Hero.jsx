import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'

export const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className='w-full md:basis-1/2'>
                    <h3 data-aos="fade-right" data-aos-duration= "1508" className='text-headingColor font-[600] text-[16px]'>Hello Welcome</h3>
                    <h1 data-aos="fade-up" data-aos-duration= "1508" className='text-headingColor font-[800] text-[1.8rem] sn:text[40px]'>I'm Terence Faid JABO <br/> Software Developer</h1>
                </div>
            </div>

        </div>
    </section>
  )
}
