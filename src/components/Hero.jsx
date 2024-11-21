"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Hero = () => {

    const faqs = [
        {
            question: "01. What is Next.js?",
            answer: " Next.js is a React framework for building web applications with server-side rendering and static site generation.",
        },
        {
            question: "02. What is Tailwind CSS?",
            answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
        },
        {
            question: "03.How do I use this FAQ section?",
            answer: "Click on the dropdown icon to expand and view the answer to each question.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div>
            <div className=' p-10 items-center flex flex-col justify-center'>

                <div className='text-center items-center mt-10'>
                    <h1 className='text-5xl font-bold'>How it works</h1>
                    <h3 className='text-base font-normal mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                </div>

                <div className='sm:flex justify-around sm:gap-5 mt-16'>
                    <div className='bg-white  border border-blue-500 flex flex-col rounded-2xl items-center text-center p-8 shadow-md'>
                        <Image src={"/user.svg"} width={40} height={40} alt="image" />
                        <h1 className='text-xl font-bold mt-6'>Create Account</h1>
                        <h3 className='text-base font-normal mt-3'>Elit velit mauris aliquam est diam. Leo sagittis consec tetur diam</h3>
                    </div>
                    <div className='bg-white border mt-3 sm:mt-0 border-blue-500 flex flex-col rounded-2xl items-center text-center p-8 shadow-md'>
                        <Image src={"/doc.svg"} width={40} height={40} alt="image" />
                        <h1 className='text-xl font-bold mt-6'>Upload Resume</h1>
                        <h3 className='text-base font-normal mt-3'>Elit velit mauris aliquam est diam. Leo sagittis consect etur diam</h3>
                    </div>
                    <div className='bg-white border border-blue-500 flex flex-col rounded-2xl items-center text-center p-8 shadow-md'>
                        <Image src={"/bbeg.svg"} width={40} height={40} alt="image" />
                        <h1 className='text-xl font-bold mt-6'>Find Jobs</h1>
                        <h3 className='text-base font-normal mt-3'>Elit velit fd mauris aliquam est diam. Leo sagittis rrte wrt</h3>
                    </div>
                    <div className='bg-white border border-blue-500 flex flex-col rounded-2xl items-center text-center p-8 shadow-md'>
                        <Image src={"/sign.svg"} width={40} height={40} alt="image" />
                        <h1 className='text-xl font-bold mt-6'>Apply Job</h1>
                        <h3 className='text-base font-normal mt-3'>Elit velit mauris aliquam est diam. Leo sagittis cons ect</h3>
                    </div>

                </div>

                <div className='sm:flex justify-between gap-10 mt-24 items-center'>
                    <div >
                        <Image src={"/konrad.jpg"} width={600} height={400} alt="image" className='rounded-xl' />
                    </div>

                    <div className='mt-10 sm:mt-0'>
                        <h1 className='text-5xl font-bold '>We’re Only Working With The Best</h1>
                        <h3 className='mt-5 text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quod ipsam ex reiciendis dignissimos enim?</h3>
                        <div className='grid-cols-2 grid mt-8 gap-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={"/crown.svg"} width={40} height={40} alt="image" />

                                <h3 className='text-xl font-semibold'>Quality Job</h3>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Image src={"/doc2.svg"} width={40} height={40} alt="image" />
                                <h3 className='text-xl font-semibold'>Resume builder</h3>

                            </div>
                            <div className='flex items-center gap-3'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1032)">
                                        <path d="M20.0001 7.40601L22.3078 12.0817L27.4677 12.8315L23.7339 16.471L24.6154 21.61L20.0001 19.1837L15.385 21.61L16.2664 16.471L12.5327 12.8315L17.6926 12.0817L20.0001 7.40601Z" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M20.0001 29.2509C27.7284 29.2509 33.9934 22.9859 33.9934 15.2577C33.9934 7.52941 27.7284 1.2644 20.0001 1.2644C12.2718 1.2644 6.00684 7.52941 6.00684 15.2577C6.00684 22.9859 12.2718 29.2509 20.0001 29.2509Z" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M16.0603 28.6878L10.0364 36.979L8.94683 30.6268L2.56885 31.5536L8.55633 23.3125" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M23.9399 28.6878L29.9639 36.979L31.0534 30.6268L37.4314 31.5536L31.4438 23.3125" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1032">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h3 className='text-xl font-semibold'>Top Companies</h3>

                            </div>
                            <div className='flex items-center gap-3'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1066)">
                                        <path d="M24.969 30.9312L20.0271 33.7551L15.0853 30.9312C10.3117 28.2034 7.36572 23.1269 7.36572 17.6289V4.21879L20.0272 1.19678L32.6887 4.21879V17.629C32.6886 23.1269 29.7426 28.2034 24.969 30.9312Z" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M15.1292 30.975L9.68707 37.9298L7.04176 33.3919L2.03906 31.7911L8.67981 23.719" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M24.8994 31.0011L30.3153 37.9297L32.9605 33.3919L37.9633 31.7911L31.4034 23.7998" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M20.0274 9.6853L22.4382 12.9861L26.3224 14.2589L23.9282 17.5717L23.9179 21.6591L20.0274 20.4058L16.1368 21.6591L16.1266 17.5717L13.7324 14.2589L17.6166 12.9861L20.0274 9.6853Z" stroke="#0A65CC" stroke-width="2" stroke-miterlimit="10" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1066">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h3 className='text-xl font-semibold'>Top Talents</h3>

                            </div>


                        </div>
                    </div>
                </div>


                <div className='text-center items-center mt-24'>
                    <h1 className='text-5xl font-bold'>Frequently Asked Questions</h1>
                    <h3 className='text-base font-normal mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

                    <div className=" p-6">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border rounded-lg border-blue-600">
                                    <div
                                        onClick={() => toggleFAQ(index)}
                                        className="flex items-center justify-between p-4 cursor-pointer"
                                    >

                                        <h2 className="text-lg font-semibold ">{faq.question}</h2>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-6 w-6 transform transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40" : "max-h-0"
                                            }`}
                                    >
                                        <div className="p-4 text-gray-600 text-start text-base">{faq.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='sm:flex justify-between  items-start mt-16'>
                    <div className='sm:w-1/2 '>
                        <h1 className='text-5xl font-bold'>You Will Grow, You Will Succeed. We Promise That</h1>
                        <p className='text-base font-normal mt-10'>Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt
                            ultrices. Diam convallis morbi pellentesque adipiscing </p>

                        <div className='mt-14 grid sm:grid-cols-2 grid-cols-1 gap-14'>
                            <div className='items-start'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_751)">
                                        <path d="M25.6672 19.74V23.24C25.6685 23.5649 25.6019 23.8866 25.4718 24.1843C25.3416 24.482 25.1507 24.7492 24.9112 24.9689C24.6718 25.1885 24.3892 25.3558 24.0814 25.4599C23.7736 25.5639 23.4474 25.6026 23.1238 25.5734C19.5338 25.1833 16.0853 23.9565 13.0555 21.9917C10.2366 20.2005 7.84672 17.8106 6.05549 14.9917C4.0838 11.9481 2.85678 8.48286 2.47382 4.8767C2.44467 4.55408 2.48301 4.22892 2.58641 3.92193C2.68981 3.61494 2.85599 3.33284 3.07439 3.09359C3.29278 2.85434 3.5586 2.66319 3.85491 2.53231C4.15123 2.40142 4.47156 2.33367 4.79549 2.33337H8.29549C8.86168 2.32779 9.41058 2.52829 9.83988 2.89749C10.2692 3.26668 10.5496 3.77939 10.6288 4.34003C10.7766 5.46011 11.0505 6.55988 11.4455 7.61836C11.6025 8.03594 11.6364 8.48977 11.5434 8.92606C11.4503 9.36235 11.2342 9.76283 10.9205 10.08L9.43883 11.5617C11.0996 14.4825 13.518 16.9009 16.4388 18.5617L17.9205 17.08C18.2377 16.7664 18.6382 16.5502 19.0745 16.4571C19.5108 16.3641 19.9646 16.3981 20.3822 16.555C21.4406 16.95 22.5404 17.224 23.6605 17.3717C24.2272 17.4516 24.7448 17.7371 25.1148 18.1738C25.4848 18.6104 25.6814 19.1679 25.6672 19.74Z" stroke="#0A65CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_751">
                                            <rect width="28" height="28" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <h1 className='font-bold text-2xl mt-4'>Call for inquiry</h1>
                                <h1 className='font-medium text-xl mt-4'>+91 9057751426</h1>
                            </div>
                            <div className='items-start'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.66683 4.66675H23.3335C24.6168 4.66675 25.6668 5.71675 25.6668 7.00008V21.0001C25.6668 22.2834 24.6168 23.3334 23.3335 23.3334H4.66683C3.3835 23.3334 2.3335 22.2834 2.3335 21.0001V7.00008C2.3335 5.71675 3.3835 4.66675 4.66683 4.66675Z" stroke="#0A65CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25.6668 7L14.0002 15.1667L2.3335 7" stroke="#0A65CC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h1 className='font-bold text-2xl mt-4'>Send us email</h1>
                                <h1 className='font-medium text-xl mt-4'>viku12271@gmail.com</h1>
                            </div>
                            <div className='items-start'>
                                <Image src={"/watch.svg"} width={28} height={28} alt="image" className='' />
                                <h1 className='font-bold text-2xl mt-4'>Opening hours</h1>
                                <h1 className='font-medium text-xl mt-4'>Mon - Fri: 10AM - 10PM </h1>
                            </div>
                            <div className='items-start'>
                                <Image src={"/location.svg"} width={28} height={28} alt="image" className='' />
                                <h1 className='font-bold text-2xl mt-4'>Office</h1>
                                <h1 className='font-medium text-xl mt-4'>sultana, jhunjhunu, Rajasthan</h1>
                            </div>
                        </div>
                    </div>

                    <div className="min-h-screen flex items-center justify-cente mt-10 sm:mt-0">
                        <div className="w-full bg-white rounded-2xl border border-blue-600 shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                                Contact Info
                            </h2>
                            <p className="text-center text-gray-600 mb-6">
                                Nibh dis faucibus proin lacus tristique
                            </p>

                            <form className="space-y-4">
                                <div className="flex space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full px-3 py-2 border border-blue-500 rounded-lg outline-none"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your last name"
                                            className="w-full px-3 py-2 border border-blue-500 rounded-lg outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your E-mail address"
                                        className="w-full px-3 py-2 border border-blue-500 rounded-lg outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Your message..."
                                        rows="4"
                                        className="w-full px-3 py-2 border border-blue-500 rounded-lg outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero