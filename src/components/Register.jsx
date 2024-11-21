"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Register = ({ onClose }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="fixed inset-0 bg-[#f2f7fc] bg-opacity-100 z-50 text-5xl text-black">

            <div className='flex justify-between m-5'>
                <div className="flex flex-col items-center justify-center h-screen">

                    <div className="relative bg-[#0a65cc] rounded-t-full w-80 h-4/5 flex items-center justify-center">
                        <div className="absolute rounded-full -right-20">
                            <Image
                                src="/man2.png" // Replace with the appropriate image path
                                alt="Person working on a laptop"
                                width={300}
                                height={300}
                            />
                        </div>

                    </div>
                </div>

                <div className=' items-center w-2/3 flex flex-col mt-10'>


                    <h1 className='text-5xl mt-10 font-bold '>Create Account</h1>

                    <form className=" w-3/4 mx-auto flex flex-col items-center mt-12">
                        <div className="relative flex items-center">
                            {/* Icon */}
                            <div className="absolute left-5">
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.1665 10.4166L11.5989 12.4459C13.5999 13.629 14.3998 13.629 16.4008 12.4459L19.8332 10.4166" stroke="#616161" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.35189 16.2216C2.42817 19.798 2.46629 21.5863 3.78594 22.9109C5.1056 24.2357 6.94222 24.2818 10.6155 24.374C12.8794 24.431 15.121 24.431 17.3849 24.374C21.0582 24.2818 22.8947 24.2357 24.2143 22.9109C25.5341 21.5863 25.5722 19.798 25.6484 16.2216C25.673 15.0716 25.673 13.9284 25.6484 12.7785C25.5722 9.20205 25.5341 7.41381 24.2143 6.08915C22.8947 4.76448 21.0582 4.71834 17.3849 4.62604C15.121 4.56915 12.8794 4.56915 10.6155 4.62603C6.94222 4.71831 5.1056 4.76445 3.78594 6.08913C2.46629 7.4138 2.42815 9.20203 2.35189 12.7784C2.32737 13.9284 2.32737 15.0716 2.35189 16.2216Z" stroke="#616161" stroke-width="1.75" stroke-linejoin="round" />
                                </svg>

                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="email@gmail.com"
                                className="pl-16 py-3 px-20 w-full text-base font-normal rounded-full border border-blue-600 outline-none"
                            />
                        </div>
                        <div className="relative flex items-center mt-5">
                            {/* Icon */}
                            <div className="absolute left-5">
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.83337 11C5.83337 7.15024 5.83337 5.22533 7.02936 4.02936C8.22533 2.83337 10.1502 2.83337 14 2.83337C17.8498 2.83337 19.7747 2.83337 20.9708 4.02936C22.1667 5.22533 22.1667 7.15024 22.1667 11V18C22.1667 21.8498 22.1667 23.7747 20.9708 24.9708C19.7747 26.1667 17.8498 26.1667 14 26.1667C10.1502 26.1667 8.22533 26.1667 7.02936 24.9708C5.83337 23.7747 5.83337 21.8498 5.83337 18V11Z" stroke="#616161" stroke-width="1.75" stroke-linecap="round" />
                                    <path d="M12.8334 22.6666H15.1667" stroke="#616161" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.5 2.83337L10.6038 3.4564C10.8289 4.80655 10.9414 5.48163 11.4044 5.89242C11.8874 6.32094 12.5721 6.33337 14 6.33337C15.4279 6.33337 16.1126 6.32094 16.5956 5.89242C17.0587 5.48163 17.1711 4.80655 17.3962 3.4564L17.5 2.83337" stroke="#616161" stroke-width="1.75" stroke-linejoin="round" />
                                </svg>


                            </div>

                            {/* Input */}
                            <input
                                type="text"
                                placeholder="Enter your phone no"
                                className="pl-16 py-3 px-20 w-full text-base font-normal rounded-full border border-blue-600 outline-none"
                            />
                        </div>

                        <div className="relative flex items-center mt-5">
                            {/* Icon */}
                            <div className="absolute left-5">
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.97895 22.4855C5.24131 24.4342 6.85532 25.9608 8.81944 26.0511C10.4722 26.127 12.151 26.1667 13.9998 26.1667C15.8487 26.1667 17.5275 26.127 19.1802 26.0511C21.1444 25.9608 22.7584 24.4342 23.0207 22.4855C23.192 21.2138 23.3332 19.9105 23.3332 18.5833C23.3332 17.2561 23.192 15.9529 23.0207 14.6812C22.7584 12.7325 21.1444 11.2059 19.1802 11.1156C17.5275 11.0396 15.8487 11 13.9998 11C12.151 11 10.4722 11.0396 8.81944 11.1156C6.85532 11.2059 5.24131 12.7325 4.97895 14.6812C4.80773 15.9529 4.6665 17.2561 4.6665 18.5833C4.6665 19.9105 4.80773 21.2138 4.97895 22.4855Z" stroke="#616161" stroke-width="1.75" />
                                    <path d="M8.75 11V8.08337C8.75 5.18388 11.1005 2.83337 14 2.83337C16.8995 2.83337 19.25 5.18388 19.25 8.08337V11" stroke="#616161" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.6665 18.5717V18.5833" stroke="#616161" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14 18.5717V18.5833" stroke="#616161" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.3335 18.5717V18.5833" stroke="#616161" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                            {/* Input */}
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                className="pl-16 py-3 px-20 w-full text-base font-normal rounded-full border border-blue-600 outline-none"
                            />

                            <div className="absolute right-5 cursor-pointer" onClick={togglePasswordVisibility}>

                                {passwordVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#616161" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>

                                ) : (
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.8">
                                            <path d="M19.439 15.939C20.3636 15.0212 21.0775 14.1091 21.544 13.455C21.848 13.0287 22 12.8155 22 12.5C22 12.1845 21.848 11.9713 21.544 11.545C20.1779 9.62944 16.6892 5.5 12 5.5C11.0922 5.5 10.2294 5.65476 9.41827 5.91827M6.74742 7.24742C4.73118 8.6072 3.24215 10.4427 2.45604 11.545C2.15201 11.9713 2 12.1845 2 12.5C2 12.8155 2.15201 13.0287 2.45604 13.455C3.8221 15.3706 7.31078 19.5 12 19.5C13.9908 19.5 15.7651 18.7557 17.2526 17.7526" stroke="#9E9E9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.85786 10.5C9.32783 11.03 9 11.7623 9 12.5711C9 14.1887 10.3113 15.5 11.9289 15.5C12.7377 15.5 13.47 15.1722 14 14.6421" stroke="#616161" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M3 3.5L21 21.5" stroke="#616161" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                )}

                            </div>
                        </div>

                       

                        <div className='mx-auto mt-10'>
                            <button type='submit' className="rounded-full bg-[#0A65CC] text-white py-3 px-40 mx-auto text-lg font-semibold">Create Account</button>
                        </div>
                    </form>





                    <div >
                        <span className='text-base font-normal'>Don’t have an account?</span>
                        <Link href={"/"} className='text-base font-semibold pl-2 text-[#0A65CC]'>Sign up</Link>
                    </div>
                </div>

                <div className=''>
                    <button
                        className="  top-0 text-sm text-red-500 hover:underline"
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register