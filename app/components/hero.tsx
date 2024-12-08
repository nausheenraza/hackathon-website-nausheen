import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section>
        <div className='px-8 py-12'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
              <div className="flex flex-col gap-[40px]">
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the future with <br /> the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='w-[150px] h-[56px] bg-[#F9F9F926] text-white border border-gray-600 '>
                    View collection
                  </button>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className='w-full md:w-[50%] h-auto md:h-[580px] bg-[#344454] flex justify-center items-end'>
              <Image src={'/images/mainchair.png'} width={500} height={500} alt='right' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;
