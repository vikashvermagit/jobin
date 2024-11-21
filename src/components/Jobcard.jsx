import Image from 'next/image'
import React from 'react'

const Jobcard = () => {
    return (
        <div className='bg-white rounded-xl p-5 m-3'>
            <div className='flex justify-between'>
                <h1 className='bg-[#f7f8fc] rounded-full px-3 py-1 text-base text-[#0A65CC]'>10 min ago</h1>
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
                    <button className="rounded-[8px] bg-[#0A65CC] text-white w-24 h-10 text-base font-semibold">Job details</button>
                </div>
            </div>
        </div>
    )
}

export default Jobcard