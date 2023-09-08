import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='bg-[#F0F0F0] pt-[110px] pb-[110px]'>
                <div className='max-w-container mx-auto'>

                    <Slider {...settings}>
                        <div class="bg-blog1 ml-8 bg-no-repeat ">
                            <div class=" w-[339px] h-[401px] bg-[rgb(0,0,0,0.5)]">
                                <h1 class="text-white w-[249px] text-2xl mx-auto pt-[72px]">lorem ipsum dolor sit amet
                                    consectetur adipiscing elit sed do eiusmod.</h1>
                                <div class="pl-[46px] pt-[52px]">
                                    <a class="text-white  py-[14px] px-[30px] bg-primary" href="">Learn More</a>
                                </div>
                            </div>
                            <div class="justify-end  block lg:hidden lg:ml-[930px] text-black font-bold	font-Poppins mt-[29px]">
                                <h1 class="">MORE FROM THE BLLOG  </h1>
                            </div>
                        </div>
                        <div class="bg-blog2 ml-8 bg-no-repeat mr-[62px]">
                            <div class=" w-[339px] h-[401px] bg-[rgb(0,0,0,0.5)]">
                                <h1 class="text-white w-[249px] text-2xl mx-auto pt-[72px]">lorem ipsum dolor sit amet
                                    consectetur adipiscing elit sed do eiusmod.</h1>
                                <div class="pl-[46px] pt-[52px]">
                                    <a class="text-white  py-[14px] px-[30px] bg-primary" href="">Learn More</a>
                                </div>
                            </div>
                            <div class="justify-end  block lg:hidden lg:ml-[930px] text-black font-bold	font-Poppins mt-[29px]">
                                <h1 class="">MORE FROM THE BLLOG  </h1>
                            </div>
                        </div>
                        <div class="bg-blog3 ml-8  bg-no-repeat">
                            <div class=" w-[339px] h-[401px] bg-[rgb(0,0,0,0.5)]">
                                <h1 class="text-white w-[249px] text-2xl mx-auto pt-[72px]">lorem ipsum dolor sit amet
                                    consectetur adipiscing elit sed do eiusmod.</h1>
                                <div class="pl-[46px] pt-[52px]">
                                    <a class="text-white  py-[14px] px-[30px] bg-primary" href="">Learn More</a>
                                </div>

                            </div>
                            <div class="justify-end  block lg:hidden lg:ml-[930px] text-black font-bold	font-Poppins mt-[29px]">
                                <h1 class="">MORE FROM THE BLLOG  </h1>
                            </div>
                        </div>

                    </Slider>
                    <div class="justify-end hidden lg:block  lg:ml-[930px] text-black font-bold	font-Poppins mt-[29px]">
                        <h1 class="">MORE FROM THE BLLOG  </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog