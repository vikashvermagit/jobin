"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Jobcard from './Jobcard'
import PriceRangeSlider from './PriceRangeSlider';

function JobSec() {

    const jobData = Array(10).fill(<Jobcard />); // Array with 10 Jobcard components
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the number of pages
    const totalPages = Math.ceil(jobData.length / itemsPerPage);

    // Get the current items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = jobData.slice(startIndex, startIndex + itemsPerPage);

    // Pagination handler functions
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    return (
        <div>
            <div className='flex justify-between mt-6'>
            <div className=" w-full max-w-xs mt-5 mx-4">
                <div className='bg-[#f5f8f8] border p-4 pb-8 rounded-3xl border-blue-600'>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Search by Job Title</label>
                        <div className="flex items-center bg-white border border-blue-600 rounded-md px-2">
                            <Image src={"/location.svg"} width={20} height={20} alt="image" className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Job title or company"
                                className="w-full p-2 focus:outline-none" />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Location</label>
                        <div className="flex items-center bg-white border border-blue-600 rounded-md px-2">
                            <Image src={"/beg.svg"} width={20} height={20} alt="image" className="text-gray-400" />
                            <select className="w-full p-2 bg-transparent focus:outline-none">
                                <option>Choose city</option>
                                <option>Jaipur</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                                {/* Add more cities as needed */}
                            </select>
                        </div>
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Category</label>
                        <ul className="space-y-2">
                            {[
                                { name: 'Commerce', count: 10 },
                                { name: 'Telecommunications', count: 10 },
                                { name: 'Hotels & Tourism', count: 10 },
                                { name: 'Education', count: 10 },
                                { name: 'Financial Services', count: 10 },
                            ].map((category, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        {category.name}
                                    </label>
                                    <span className="text-gray-500">{category.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Show More Button */}
                    <button className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold">
                        Show More
                    </button>

                    <div className="mb-4 mt-5">
                        <label className="block font-semibold mb-2"> Job Type</label>
                        <ul className="space-y-2">
                            {[
                                { name: 'Commerce', count: 10 },
                                { name: 'Telecommunications', count: 10 },
                                { name: 'Hotels & Tourism', count: 10 },
                                { name: 'Education', count: 10 },
                                { name: 'Financial Services', count: 10 },
                            ].map((category, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        {category.name}
                                    </label>
                                    <span className="text-gray-500">{category.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Experience Level</label>
                        <ul className="space-y-2">
                            {[
                                { name: 'Commerce', count: 10 },
                                { name: 'Telecommunications', count: 10 },
                                { name: 'Hotels & Tourism', count: 10 },
                                { name: 'Education', count: 10 },
                                { name: 'Financial Services', count: 10 },
                            ].map((category, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        {category.name}
                                    </label>
                                    <span className="text-gray-500">{category.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="rounded-[8px] mt-5 bg-[#0A65CC] text-white w-32 h-10 text-base font-semibold">Apply</button>
                </div>

                <div className="relative w-full max-w-md mt-5">
                    {/* Background Image */}
                    <Image
                        src="/konrad.jpg"
                        alt="We Are Hiring"
                        layout="responsive"
                        width={314}
                        height={460}
                        className="rounded-2xl object-cover" />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 items-center bg-black bg-opacity-50  rounded-2xl  text-white p-8">
                        <h2 className="text-3xl font-bold">WE ARE HIRING</h2>
                        <h2 className="text-2xl font-medium mt-2">Apply Today !</h2>

                    </div>
                </div>
            </div>


            <div className='w-full mt-5 mb-8'>
                <div className='flex justify-between px-7 items-center'>
                    <h1 className='text-base font-medium text-[#6C757D]'>
                        Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, jobData.length)} of {jobData.length} results
                    </h1>
                    <button className='border px-3 py-1 rounded-md flex gap-3 text-[#6C757D] border-blue-600'>
                        Sort by latest
                        <Image src={"/arrow.svg"} width={20} height={20} alt="Sort arrow" />
                    </button>
                </div>

                <div>
                    {currentItems.map((job, index) => (
                        <div key={index}>{job}</div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-4 gap-2">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border rounded-md ${currentPage === 1 ? 'text-gray-400 border-gray-400' : 'text-[#6C757D] border-[#6C757D]'}`}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 text-gray-600">{currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border rounded-md ${currentPage === totalPages ? 'text-gray-400 border-gray-400' : 'text-[#6C757D] border-[#6C757D]'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>

            <div className='border-t-2 mt-16 p-5'>

                <div className='text-center'>
                    <h1 className='font-bold text-5xl'>Top Company</h1>
                    <h2 className='text-base font-normal mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae nesciunt facilis reiciendis molestiae pariatur.</h2>
                </div>

                <div className='flex justify-between gap-5 mt-14 mb-10'>
                    <div className='bg-white flex flex-col rounded-2xl items-center text-center p-10 shadow-md'>
                        <Image src={"/insta.svg"} width={60} height={60} alt="image" />
                        <h1 className='text-2xl font-semibold mt-5'>Instagram</h1>
                        <h3 className='text-base font-normal mt-9'>Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</h3>
                        <h1 className='bg-[#e7f0fa] rounded-full px-3 py-1 text-base text-[#0A65CC] mt-9'>10 open jobs</h1>
                    </div>
                    <div className='bg-white flex flex-col rounded-2xl items-center text-center p-10 shadow-md'>
                        <Image src={"/insta.svg"} width={60} height={60} alt="image" />
                        <h1 className='text-2xl font-semibold mt-5'>Instagram</h1>
                        <h3 className='text-base font-normal mt-9'>Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</h3>
                        <h1 className='bg-[#e7f0fa] rounded-full px-3 py-1 text-base text-[#0A65CC] mt-9'>10 open jobs</h1>
                    </div>
                    <div className='bg-white flex flex-col rounded-2xl items-center text-center p-10 shadow-md'>
                        <Image src={"/insta.svg"} width={60} height={60} alt="image" />
                        <h1 className='text-2xl font-semibold mt-5'>Instagram</h1>
                        <h3 className='text-base font-normal mt-9'>Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</h3>
                        <h1 className='bg-[#e7f0fa] rounded-full px-3 py-1 text-base text-[#0A65CC] mt-9'>10 open jobs</h1>
                    </div>
                    <div className='bg-white flex flex-col rounded-2xl items-center text-center p-10 shadow-md'>
                        <Image src={"/insta.svg"} width={60} height={60} alt="image" />
                        <h1 className='text-2xl font-semibold mt-5'>Instagram</h1>
                        <h3 className='text-base font-normal mt-9'>Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</h3>
                        <h1 className='bg-[#e7f0fa] rounded-full px-3 py-1 text-base text-[#0A65CC] mt-9'>10 open jobs</h1>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default JobSec