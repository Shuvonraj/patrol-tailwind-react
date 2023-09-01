import React, { useState } from 'react'


const Navbar = () => {
    const [open, SetOpen] = useState(false)
    return (
        <>
            <section className="bg-[#282828] overflow-x-hidden pt-4 pb-4 hidden md:block">
                <div className="md:flex  max-w-container mx-auto justify-between items-center">
                    <div className="md:flex md:px-0  px-3">
                        <div className="heading1 items-center justify-start  flex mr-[27px]">
                            <svg className="mr-[5px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M11.875 15H2.5L2.49812 5.56625L9.64437 10.5138C9.74887 10.5861 9.87293 10.6248 10 10.6248C10.1271 10.6248 10.2511 10.5861 10.3556 10.5138L17.5 5.56875V11.25H18.75V5C18.7495 4.66863 18.6176 4.35098 18.3833 4.11666C18.149 3.88235 17.8314 3.7505 17.5 3.75H2.5C2.16858 3.75033 1.85083 3.88213 1.61648 4.11648C1.38213 4.35083 1.25033 4.66858 1.25 5V15C1.2505 15.3314 1.38235 15.649 1.61666 15.8833C1.85098 16.1176 2.16863 16.2495 2.5 16.25H11.875V15ZM16.1244 5L10 9.24L3.87563 5H16.1244Z"
                                    fill="white" />
                                <path
                                    d="M16.25 17.5009C17.6307 17.5009 18.75 16.3814 18.75 15.0004C18.75 13.6195 17.6307 12.5 16.25 12.5C14.8693 12.5 13.75 13.6195 13.75 15.0004C13.75 16.3814 14.8693 17.5009 16.25 17.5009Z"
                                    fill="white" />
                            </svg>
                            <p className="text-white">mail@yourcompany.com</p>
                            <div className="w-px h-full border-r-4 border-[#5C6A92] ml-4 hidden md:block "></div>
                        </div>
                        <div className="flex items-center md:pb-0 pb-2">
                            <svg className="mr-[5px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M15 8.12556H13.75C13.7495 7.62834 13.5518 7.15163 13.2003 6.80004C12.8488 6.44846 12.3721 6.25072 11.875 6.25022V5C12.7035 5.00099 13.4978 5.33061 14.0836 5.91655C14.6694 6.50249 14.999 7.29691 15 8.12556Z"
                                    fill="white" />
                                <path
                                    d="M17.5001 8.125H16.2501C16.2488 6.96508 15.7875 5.85305 14.9673 5.03287C14.1471 4.21269 13.0351 3.75132 11.8751 3.75V2.5C13.3665 2.50165 14.7963 3.09482 15.8508 4.14935C16.9053 5.20389 17.4985 6.63367 17.5001 8.125ZM16.2501 18.125H16.1439C3.86264 17.4187 2.11889 7.05625 1.87514 3.89375C1.83705 3.39797 1.99745 2.90736 2.32106 2.52983C2.64467 2.1523 3.10499 1.91878 3.60077 1.88063C3.65035 1.87688 3.70014 1.875 3.75014 1.875H7.04389C7.29424 1.87476 7.5389 1.94969 7.74616 2.0901C7.95343 2.23051 8.11377 2.42992 8.20639 2.6625L9.15639 5C9.24786 5.22722 9.27056 5.4763 9.22167 5.71631C9.17278 5.95631 9.05446 6.17667 8.88139 6.35L7.55014 7.69375C7.75725 8.87583 8.32289 9.96561 9.17035 10.8153C10.0178 11.665 11.1061 12.2335 12.2876 12.4437L13.6439 11.1C13.8198 10.9288 14.0423 10.8133 14.2834 10.7677C14.5246 10.7221 14.7739 10.7486 15.0001 10.8438L17.3564 11.7875C17.5855 11.8831 17.7809 12.0446 17.9178 12.2517C18.0547 12.4587 18.1269 12.7018 18.1251 12.95V16.25C18.1251 16.7473 17.9276 17.2242 17.576 17.5758C17.2243 17.9275 16.7474 18.125 16.2501 18.125ZM3.75014 3.125C3.66807 3.12475 3.58675 3.14068 3.51082 3.17186C3.4349 3.20304 3.36586 3.24887 3.30765 3.30673C3.24944 3.36459 3.2032 3.43336 3.17156 3.50909C3.13992 3.58483 3.12352 3.66605 3.12327 3.74813C3.12327 3.76563 3.12389 3.78292 3.12514 3.8C3.41264 7.5 5.25639 16.25 16.2126 16.875C16.3781 16.8849 16.5407 16.8287 16.6647 16.7188C16.7887 16.6088 16.8639 16.4542 16.8739 16.2887L16.8751 16.25V12.95L14.5189 12.0062L12.7251 13.7875L12.4251 13.75C6.98764 13.0687 6.25014 7.63125 6.25014 7.575L6.21264 7.275L7.98764 5.48125L7.05014 3.125H3.75014Z"
                                    fill="white" />
                            </svg>
                            <p className="text-white"> +896 120 5889 (Toll free)</p>


                        </div>

                    </div>
                    <div className="flex   ">
                        <svg className="mr-[19px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M11.7231 9L12.1675 6.10437H9.38908V4.22531C9.38908 3.43313 9.77721 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1385 0 10.0425 0C7.75439 0 6.25877 1.38688 6.25877 3.8975V6.10437H3.71533V9H6.25877V16H9.38908V9H11.7231Z"
                                fill="white" />
                        </svg>
                        <svg className="mr-[19px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M11.7231 9L12.1675 6.10437H9.38908V4.22531C9.38908 3.43313 9.77721 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1385 0 10.0425 0C7.75439 0 6.25877 1.38688 6.25877 3.8975V6.10437H3.71533V9H6.25877V16H9.38908V9H11.7231Z"
                                fill="white" />
                        </svg>
                        <svg className="mr-[19px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M11.7231 9L12.1675 6.10437H9.38908V4.22531C9.38908 3.43313 9.77721 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1385 0 10.0425 0C7.75439 0 6.25877 1.38688 6.25877 3.8975V6.10437H3.71533V9H6.25877V16H9.38908V9H11.7231Z"
                                fill="white" />
                        </svg>
                        <svg className="mr-[19px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M11.7231 9L12.1675 6.10437H9.38908V4.22531C9.38908 3.43313 9.77721 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1385 0 10.0425 0C7.75439 0 6.25877 1.38688 6.25877 3.8975V6.10437H3.71533V9H6.25877V16H9.38908V9H11.7231Z"
                                fill="white" />
                        </svg>


                    </div>
                </div>
                <div
                    className="after:w-full after:h-[5px] after:content-[''] after:bg-[#FFB800] relative after:absolute  after:top-[11px] after:left-0 ">
                </div>
            </section>
            {/* <!--top header part end --> */}

            {/* <!-- header part start --> */}
            <section className="bg-primary pt-[30px] pb-[26px]">
                <div className="md:flex items-center max-w-container justify-between md:mx-auto  ">
                    <div className=" flex items-center justify-between mx-3 ">
                        <div className='flex mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
                                <path
                                    d="M1.31817 26.7647C-3.34564 18.9885 5.42342 5.58824 11.1708 1C16.4051 5.23529 25.3341 18.2952 20.7159 26.7647C17.6367 32.4118 4.70501 32.4118 1.31817 26.7647Z"
                                    fill="white" />
                                <path
                                    d="M8.67767 34.6353C2.74191 24.7854 13.9025 7.81176 21.2174 2C27.8792 7.36471 39.2434 23.9073 33.3657 34.6353C29.4467 41.7882 12.9882 41.7882 8.67767 34.6353Z"
                                    fill="white" stroke="#F40404" stroke-width="2" />
                            </svg>
                            <h1 className="text-white font-mono no-underline text-3xl font-black">PETROIL  </h1>
                        </div>
                        <div onClick={() => SetOpen(!open)} className='text-white text-4xl block md:hidden cursor-pointer'>
                            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                        </div>
                    </div>
                    <ul className={` md:flex text-white items-center absolute md:static w-full md:w-auto md:z-auto pl-8 md:pl-0 md:pb-0 pb-12  bg-primary font-Poppins font-semibold transition-all ease-in-out duration-500  ${open ? 'top-20':'top-[-490px]' }	`}>
                        <li className="lg:mr-[47px] md:my-0 my-7 text-xl  md:mr-3 " href="">Home</li>
                        <li className="lg:mr-[47px] md:my-0 my-7 text-xl md:mr-3" href="">About</li>
                        <li className="lg:mr-[47px] md:my-0 my-7 text-xl md:mr-3" href="">Services</li>
                        <li className="lg:mr-[47px] md:my-0 my-7 text-xl md:mr-3" href="">Gallery</li>
                        <li className="lg:mr-[47px] md:my-0 my-7 text-xl md:mr-3 " href="">Blog</li>
                        <li className="lg:mr-[47px] text-xl md:border-4 border-white px-1 md:px-8 md:py-3.5 md:mr-4 " href="">CONTACT</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar