import Image from 'next/image'
import React from 'react'
import Jobcard from './Jobcard'

const JobDescri = () => {
    return (
        <div>
            <div className='bg-transparent rounded-xl p-10 m-5'>
                <div className='flex justify-between'>
                    <h1 className='bg-[#f8f9fa] border border-blue-500 rounded-full px-3 py-1 text-base text-[#0A65CC]'>10 min ago</h1>
                    <Image src="/save.svg" width={20} height={20} alt="Icon" />
                </div>

                <div className='flex mt-6 gap-8'>
                    <Image src="/clogo.svg" width={40} height={40} alt="Icon" className='rounded-full' />
                    <div>
                        <h1 className='text-3xl font-semibold'>Forward Security Director</h1>
                        <h1 className='text-base'>Bauch, Schuppe and Schulist Co</h1>
                    </div>
                </div>

                <div className='flex justify-between mt-8'>
                    <div className='flex text-center gap-5'>
                        <div className='flex text-center items-center gap-3'>
                            <Image src="/bbeg.svg" width={23} height={23} alt="Icon" />
                            <h2 className='text-base font-semibold text-[#6C757D]'>Hotels & Tourism</h2>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src="/watch.svg" width={23} height={23} alt="Icon" />
                            <h2 className='text-base font-semibold text-[#6C757D]'>Full Time</h2>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src="/wallet.svg" width={23} height={23} alt="Icon" />
                            <h2 className='text-base font-semibold text-[#6C757D]'>$40000-$42000</h2>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src="/location.svg" width={23} height={23} alt="Icon" />
                            <h2 className='text-base font-semibold text-[#6C757D]'>New-York, USA</h2>
                        </div>
                    </div>

                    <div>
                        <button className="rounded-[8px] bg-[#0A65CC] text-white w-56 h-10 text-base font-semibold">Apply Job</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-between px-4 mx-10 gap-10'>
                <div className='w-4/5 py-5'>
                    <h1 className='text-2xl font-semibold text-black'>Job Description</h1>
                    <p className='text-base mt-5 font-normal'>Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in.
                        Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse
                        morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
                        Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem
                        amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.
                        Quisque tincidunt metus lectus porta eget blandit euismod sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor varius nam
                        maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.</p>

                    <h1 className='text-2xl font-semibold mt-8'>Key Responsibilities</h1>
                    <ul className='text-base mt-10 list-disc list-inside space-y-4'>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissi</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissi</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                    </ul>

                    <h1 className='text-2xl font-semibold mt-8'>Professional Skills</h1>
                    <ul className='text-base mt-10 list-disc list-inside space-y-4'>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissi</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissi</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                        <li>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim</li>
                    </ul>


                    <div className='flex gap-6 mt-14'>
                        <h1 className='text-xl font-semibold'>Share Jobs : </h1>
                        <div className='flex gap-6'>
                            <Image src="/insta.svg" width={24} height={24} alt="Icon" />
                            <Image src="/insta.svg" width={24} height={24} alt="Icon" />
                            <Image src="/insta.svg" width={24} height={24} alt="Icon" />
                        </div>
                    </div>


                </div>

                <div>
                    <div className='bg-white rounded-xl p-5 shadow-md'>
                        <h1 className='text-lg font-bold text-start'>Job Overview</h1>

                        <div className='flex gap-5 mt-4 items-start'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3445 20.2627C19.3445 15.4342 16.5831 14.7543 11.9999 14.7543C7.38286 14.7543 4.65527 15.3849 4.65527 20.2627" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9999 11.0819C14.0281 11.0819 15.6723 9.43777 15.6723 7.40961C15.6723 5.38145 14.0281 3.7373 11.9999 3.7373C9.97179 3.7373 8.32764 5.38145 8.32764 7.40961C8.32764 9.43777 9.97179 11.0819 11.9999 11.0819Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            <div>
                                <h1 className='text-base font-semibold text-start'>Job Title</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>Corporate Solutions Executive</h1>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-4 items-start'>
                            <Image src={"/watch.svg"} width={24} height={24} alt="image" />
                            <div>
                                <h1 className='text-base font-semibold text-start'>Job Type</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>Full Time</h1>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-4 items-start'>
                            <Image src={"/bbeg.svg"} width={24} height={24} alt="image" />
                            <div>
                                <h1 className='text-base font-semibold text-start'>Category</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>Commerce</h1>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-4 items-start'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.7174C16.4183 17.7174 20 14.1357 20 9.71741C20 5.29913 16.4183 1.71741 12 1.71741C7.58172 1.71741 4 5.29913 4 9.71741C4 14.1357 7.58172 17.7174 12 17.7174Z" stroke="#0A65CC" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M14.398 10.4965L16.5156 8.25125L13.4827 7.67952L12.0017 4.97168L10.5208 7.67952L7.48779 8.25125L9.60547 10.4965L9.21195 13.5577L12.0017 12.2375L14.7915 13.5577L14.398 10.4965Z" stroke="#0A65CC" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M6.24023 15.2686V19.7223C7.18095 19.7223 8.0534 19.433 8.7737 18.9385" stroke="#0A65CC" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M17.7586 15.2686V19.7223C16.8178 19.7223 15.9454 19.433 15.2251 18.9385" stroke="#0A65CC" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M8.7998 17.0519V22.2833C10.0541 22.2833 11.187 21.7689 11.9998 20.9397C12.8126 21.7689 13.9455 22.2833 15.1998 22.2833V17.0516" stroke="#0A65CC" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>


                            <div>
                                <h1 className='text-base font-semibold text-start'>Experience</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>5 Years</h1>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-4 items-start'>
                            <Image src={"/degree.svg"} width={24} height={24} alt="image" />
                            <div>
                                <h1 className='text-base font-semibold text-start'>Degree</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>Master</h1>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-4 items-start'>
                            <Image src={"/wallet.svg"} width={24} height={24} alt="image" />
                            <div>
                                <h1 className='text-base font-semibold text-start'>Offered Salary</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>$40000-$42000</h1>
                            </div>

                        </div>
                        <div className='flex gap-5 mt-4 items-start'>
                            <Image src={"/location.svg"} width={24} height={24} alt="image" />
                            <div>
                                <h1 className='text-base font-semibold text-start'>Location</h1>
                                <h1 className='text-base text-start text-[#6C757D]'>New-York, USA</h1>
                            </div>

                        </div>

                    </div>

                    <div className=" p-5 mt-10 bg-white rounded-xl shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Send Us Message</h2>
                        <form className="space-y-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z" fill="#6C757D" />
                                    </svg>

                                </span>
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full pl-10 py-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33073 3.3335H16.6641C17.5807 3.3335 18.3307 4.0835 18.3307 5.00016V15.0002C18.3307 15.9168 17.5807 16.6668 16.6641 16.6668H3.33073C2.41406 16.6668 1.66406 15.9168 1.66406 15.0002V5.00016C1.66406 4.0835 2.41406 3.3335 3.33073 3.3335Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.3307 5L9.9974 10.8333L1.66406 5" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full pl-10 py-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3351 14.0999V16.5999C18.3361 16.832 18.2886 17.0617 18.1956 17.2744C18.1026 17.487 17.9662 17.6779 17.7952 17.8348C17.6242 17.9917 17.4223 18.1112 17.2024 18.1855C16.9826 18.2599 16.7496 18.2875 16.5185 18.2666C13.9542 17.988 11.491 17.1117 9.32682 15.7083C7.31334 14.4288 5.60626 12.7217 4.32682 10.7083C2.91846 8.53426 2.04202 6.05908 1.76848 3.48325C1.74766 3.25281 1.77505 3.02055 1.8489 2.80127C1.92275 2.58199 2.04146 2.38049 2.19745 2.2096C2.35345 2.03871 2.54332 1.90218 2.75498 1.80869C2.96663 1.7152 3.19543 1.6668 3.42682 1.66658H5.92682C6.33124 1.6626 6.72331 1.80582 7.02995 2.06953C7.33659 2.33324 7.53688 2.69946 7.59348 3.09992C7.699 3.89997 7.89469 4.68552 8.17682 5.44158C8.28894 5.73985 8.3132 6.06401 8.24674 6.37565C8.18028 6.68729 8.02587 6.97334 7.80182 7.19992L6.74348 8.25825C7.92978 10.3445 9.65719 12.072 11.7435 13.2583L12.8018 12.1999C13.0284 11.9759 13.3144 11.8215 13.6261 11.755C13.9377 11.6885 14.2619 11.7128 14.5601 11.8249C15.3162 12.107 16.1018 12.3027 16.9018 12.4083C17.3066 12.4654 17.6763 12.6693 17.9406 12.9812C18.2049 13.2931 18.3453 13.6912 18.3351 14.0999Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full pl-10 py-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                                <textarea
                                    placeholder="Your Message"
                                    rows="3"
                                    className="w-full pl-10 py-2 border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className='p-10 mt-10 mb-10'>
                <h1 className='text-5xl font-semibold'>Related Jobs</h1>
                <h3 className='text-base mt-10'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</h3>

                <Jobcard />
                <Jobcard />
                <Jobcard />
            </div>
        </div>
    )
}

export default JobDescri