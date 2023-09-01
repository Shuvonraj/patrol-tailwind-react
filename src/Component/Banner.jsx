import React from 'react'

const Banner = () => {
  return (
    <>
    <section class="bg-banner bg-no-repeat bg-cover ">
        <div class="w-full h-full bg-[rgb(0,0,0,0.5)] p-16 md:py-64">
            <div class="max-w-container z-40 mx-auto">
                <p class="text-white  font-Poppins text-[24px] md:text-[64px] md:w-[842px]  text-center md:text-left mb-[10px]  font-bold md:mb-[31px] ">We exist since 1975 on
                    the oil
                    and gas industry.</p>
                <div className='text-center md:text-left mt-5 md:mt-0 text-[12px]'><a class="md:px-[41px] px-6 md:py-3.5 py-3 mx-auto bg-primary text-white font-semibold" href="">LEARN MORE</a></div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Banner