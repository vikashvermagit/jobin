"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Login = ({ onClose }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="fixed inset-0 bg-[#f2f7fc] bg-opacity-100 z-50 text-5xl text-black">
            <div className='flex justify-between m-5'>
                <div className=' items-center w-2/3 flex flex-col mt-10'>
                    <h1 className='text-5xl font-bold mt-10'>Welcome Back!</h1>

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

                        <div className='mt-5 pl-52'>
                            <h3 className='text-base text-[#616161] font-semibold cursor-pointer'>Forgot Password?</h3>
                        </div>

                        <div className='mx-auto mt-10'>
                            <button type='submit' className="rounded-full bg-[#0A65CC] text-white py-3 px-40 mx-auto text-lg font-semibold">Login</button>
                        </div>
                    </form>

                    <div className="flex items-center my-4">
                        <hr className="flex-1 border-gray-300" />
                        <span className="mx-2 text-sm text-gray-400">OR</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    <div className='flex justify-between gap-16'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9995 11.4545V16.8763H21.534C21.2032 18.6199 20.2103 20.0964 18.7213 21.0891L23.2649 24.6145C25.9122 22.171 27.4394 18.5819 27.4394 14.3182C27.4394 13.3255 27.3504 12.3709 27.1849 11.4546L13.9995 11.4545Z" fill="#4285F4" />
                            <path d="M6.15355 16.6647L5.1288 17.4491L1.50146 20.2745C3.8051 24.8436 8.52656 28 13.9992 28C17.7792 28 20.9482 26.7527 23.2646 24.6146L18.721 21.0891C17.4737 21.9291 15.8828 22.4382 13.9992 22.4382C10.3593 22.4382 7.26663 19.9819 6.15928 16.6728L6.15355 16.6647Z" fill="#34A853" />
                            <path d="M1.50171 7.72546C0.547216 9.60902 0 11.7345 0 13.9999C0 16.2653 0.547216 18.3908 1.50171 20.2744C1.50171 20.287 6.15997 16.6598 6.15997 16.6598C5.87997 15.8198 5.71447 14.929 5.71447 13.9998C5.71447 13.0706 5.87997 12.1797 6.15997 11.3397L1.50171 7.72546Z" fill="#FBBC05" />
                            <path d="M13.9995 5.57454C16.0614 5.57454 17.8941 6.28725 19.3577 7.66181L23.3668 3.65277C20.9358 1.38736 17.7796 0 13.9995 0C8.52685 0 3.8051 3.14363 1.50146 7.72546L6.15958 11.34C7.26679 8.03089 10.3596 5.57454 13.9995 5.57454Z" fill="#EA4335" />
                        </svg>

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_94_1466)">
                                <path d="M28 14C28 6.26808 21.7319 0 14 0C6.26808 0 0 6.26808 0 14C0 20.5654 4.52032 26.0747 10.6182 27.5878V18.2784H7.73136V14H10.6182V12.1565C10.6182 7.39144 12.7747 5.1828 17.453 5.1828C18.34 5.1828 19.8705 5.35696 20.4966 5.53056V9.40856C20.1662 9.37384 19.5922 9.35648 18.8793 9.35648C16.5838 9.35648 15.6968 10.2262 15.6968 12.4869V14H20.2698L19.4841 18.2784H15.6968V27.8975C22.629 27.0603 28.0006 21.1579 28.0006 14H28Z" fill="#0866FF" />
                                <path d="M19.4837 18.2783L20.2694 13.9999H15.6964V12.4868C15.6964 10.2261 16.5834 9.35642 18.8789 9.35642C19.5918 9.35642 20.1658 9.37378 20.4962 9.4085V5.5305C19.8701 5.35634 18.3396 5.18274 17.4526 5.18274C12.7743 5.18274 10.6178 7.39138 10.6178 12.1564V13.9999H7.73096V18.2783H10.6178V27.5878C11.7008 27.8566 12.8337 27.9999 13.9996 27.9999C14.5736 27.9999 15.1398 27.9647 15.6958 27.8975V18.2783H19.4831H19.4837Z" fill="#FEF6EF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_94_1466">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_94_1468)">
                                <path d="M25.4241 21.8208C25.0007 22.799 24.4995 23.6995 23.9187 24.5273C23.1272 25.6559 22.479 26.4372 21.9795 26.871C21.2052 27.583 20.3756 27.9477 19.4873 27.9685C18.8495 27.9685 18.0804 27.787 17.1851 27.4189C16.2869 27.0524 15.4614 26.871 14.7067 26.871C13.9151 26.871 13.0661 27.0524 12.1581 27.4189C11.2486 27.787 10.516 27.9788 9.95582 27.9979C9.10392 28.0341 8.25479 27.6591 7.40721 26.871C6.86624 26.3991 6.1896 25.5903 5.379 24.4444C4.5093 23.2207 3.79429 21.8017 3.23413 20.184C2.63423 18.4367 2.3335 16.7446 2.3335 15.1065C2.3335 13.23 2.73896 11.6116 3.55111 10.2554C4.18939 9.166 5.03852 8.30666 6.10128 7.67582C7.16403 7.04497 8.31234 6.7235 9.54897 6.70294C10.2256 6.70294 11.1129 6.91224 12.2156 7.32358C13.3152 7.73631 14.0212 7.94561 14.3308 7.94561C14.5622 7.94561 15.3465 7.70088 16.6761 7.21297C17.9335 6.76049 18.9947 6.57314 19.864 6.64694C22.2198 6.83706 23.9896 7.76569 25.1666 9.43873C23.0597 10.7153 22.0176 12.5033 22.0383 14.7969C22.0573 16.5835 22.7054 18.0702 23.9792 19.2507C24.5565 19.7986 25.2012 20.222 25.9184 20.5228C25.7629 20.9739 25.5987 21.4059 25.4241 21.8208ZM20.0213 0.560404C20.0213 1.96072 19.5097 3.2682 18.49 4.47838C17.2594 5.91706 15.771 6.74839 14.1569 6.61721C14.1363 6.44921 14.1244 6.27241 14.1244 6.08661C14.1244 4.7423 14.7096 3.30363 15.7489 2.12732C16.2677 1.53173 16.9276 1.03651 17.7278 0.641462C18.5263 0.252308 19.2816 0.037098 19.9919 0.000244141C20.0127 0.187445 20.0213 0.374658 20.0213 0.560386V0.560404Z" fill="#222222" />
                            </g>
                            <defs>
                                <clipPath id="clip0_94_1468">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <div >
                        <span className='text-base font-normal'>Don’t have an account?</span>
                        <Link href={"/"} className='text-base font-semibold pl-2 text-[#0A65CC]'>Sign up</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center h-screen">
                    <button
                        className="mb-4 ml-56 text-sm text-red-500 hover:underline"
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <div className="relative bg-blue-600 rounded-t-full w-80 h-4/5 flex items-center justify-center">
                        <div className="absolute rounded-full -left-20">
                            <Image
                                src="/man.png" // Replace with the appropriate image path
                                alt="Person working on a laptop"
                                width={300}
                                height={300}
                            />
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Login