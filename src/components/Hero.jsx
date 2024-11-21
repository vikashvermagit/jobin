import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from './Footer'
import Jobcard from './Jobcard'
import ReviewCard from './ReviewCard'

const Hero = () => {
  return (
    <div>
      <div className='mt-20'>
        <h1 className='text-7xl font-bold text-center'>Find Your Dream Job Today!</h1>
        <h1 className='text-lg mt-3 font-medium text-center'>Connecting Talent with Opportunity: Your Gateway to Career Success</h1>
      </div>

      <div className="flex justify-between items-center bg-white p-0 mt-10 rounded-full shadow-md max-w-4xl mx-auto">

        <div className='flex justify-between gap-5'>
          <input
            type="text"
            placeholder="Job Title or Company"
            className="flex-grow px-8 text-base font-medium py-3 rounded-l-full focus:outline-none"
          />
          <select className="flex px-4 py-3 pr-5 text-base font-medium focus:outline-none border-l border-gray-300">
            <option>Select Location</option>
            <option>New York</option>
            <option>San Francisco</option>
            <option>Chicago</option>
          </select>
          <select className=" px-4  py-3 text-base font-medium border-l focus:outline-none border-gray-300">
            <option>Select Category</option>
            <option>Engineering</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-7 py-[29px] rounded-r-full font-medium focus:outline-none hover:bg-blue-700 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 16.293l-3.387-3.387A7.014 7.014 0 0015 9a7 7 0 10-7 7 7.014 7.014 0 004.707-1.707l3.387 3.387a1 1 0 001.414-1.414zM9 15a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
          Search Job
        </button>
      </div>

      <div className="flex flex-wrap gap-8 sm:gap-16 md:gap-60 justify-center pt-20">
        <div className="flex gap-3 items-center text-center">
          <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
            <Image src="/beg.svg" width={28} height={28} alt="Icon" />
          </div>
          <h1 className="text-[#BBB9B9] font-bold text-base sm:text-lg md:text-xl">25,850</h1>
        </div>
        <div className="flex gap-3 items-center text-center">
          <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
            <Image src="/group.svg" width={28} height={28} alt="Icon" />
          </div>
          <h1 className="text-[#BBB9B9] font-bold text-base sm:text-lg md:text-xl">25,850</h1>
        </div>
        <div className="flex gap-3 items-center text-center">
          <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
            <Image src="/building.svg" width={28} height={28} alt="Icon" />
          </div>
          <h1 className="text-[#BBB9B9] font-bold text-base sm:text-lg md:text-xl">25,850</h1>
        </div>
      </div>

      <div className='bg-blue-600 px-20 py-6 mt-20 flex justify-between items-center'>
        <Image src="/spotify.svg" width={120} height={120} alt="Icon" />
        <Image src="/spotify.svg" width={120} height={120} alt="Icon" />
        <Image src="/spotify.svg" width={120} height={120} alt="Icon" />
        <Image src="/spotify.svg" width={120} height={120} alt="Icon" />
        <Image src="/spotify.svg" width={120} height={120} alt="Icon" />

      </div>


      <div className='flex mt-20 px-16 text-center items-center justify-between'>
        <h1 className='text-5xl font-bold '>Recent Jobs Available</h1>
        <Link href={'/'} className="underline text-blue-500">View All</Link>
      </div>


      <div className='m-10'>
        <Jobcard />
        <Jobcard />
        <Jobcard />
        <Jobcard />
        <Jobcard />
      </div>

      <div className='px-8 py-24'>
        <div className='flex gap-28 justify-between'>
          <Image src="/konrad.jpg" width={450} height={414} alt="Icon" className='rounded-xl' />
          <div className='mt-6'>
            <h1 className='font-bold text-5xl'>Good Life Begins With A Good Company</h1>
            <h1 className='text-base mt-10'>Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat</h1>
            <div className='flex items-center gap-5 mt-10'>
              <button className="rounded-[8px] bg-[#0A65CC] text-white w-32 h-10 text-base font-semibold">Search Job</button>
              <Link href={'/'} className="underline text-blue-500 text-base font-semibold">Learn more</Link>
            </div>
          </div>
        </div>

        <div className='flex justify-between gap-28 items-center mt-20'>
          <div>
            <h1 className='text-[#0A65CC] font-bold text-4xl'>12k+</h1>
            <h1 className='font-semibold text-2xl'>Clients worldwide</h1>
            <p className='line-clamp-3'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum
              id scelerisque rhoncus
              . Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit
              . Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
          </div>
          <div>
            <h1 className='text-[#0A65CC] font-bold text-4xl'>20k+</h1>
            <h1 className='font-semibold text-2xl'>Active resume</h1>
            <p className='line-clamp-3'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum
              id scelerisque rhoncus
              . Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit
              . Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
          </div>
          <div>
            <h1 className='text-[#0A65CC] font-bold text-4xl'>18k+</h1>
            <h1 className='font-semibold text-2xl'>Compnies</h1>
            <p className='line-clamp-3'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum
              id scelerisque rhoncus
              . Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit
              . Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
          </div>
        </div>
      </div>

      <div className='bg-black rounded-xl px-16 py-12 m-5 flex justify-between'>
        <div>
          <h1 className='font-bold text-5xl text-white'>Create A Better
            Future For Yourself</h1>
          <p className='text-base line-clamp-2 text-white'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus
            . Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus
            dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam </p>
          <button className="rounded-[8px] bg-[#0A65CC] text-white w-32 h-10 text-base font-semibold mt-16">Search Job</button>

        </div>
        <div>

          <Image src="/softwaredeveloperpng.png" width={4007} height={620} alt="Icon" />
        </div>

      </div>

      <div className="text-center mt-28">
        <div className="mx-auto w-2/3">
          <h1 className="font-semibold text-5xl">Testimonials from Our Customers</h1>
          <h3 className="text-base mt-4 line-clamp-1">At eu lobortis pretium tincidunt amet lacus ut aenean
            aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium
            id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus.
          </h3>
        </div>

        <div className='flex gap-5 justify-between m-5'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

        <div className='text-start mt-16 p-10'>
          <h1 className='text-5xl font-semibold'>News and Blog</h1>

          <div className='flex justify-between text-center mt-6'>
            <h2 className='text-base'>Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor</h2>
            <Link href={"/"} className="underline text-blue-500 text-xl font-semibold">View All</Link>
          </div>

          <div className='flex justify-center gap-10 items-center'>
            <div className='relative mt-14'>
              <div>
                <Image src={"/konrad.jpg"} width={640} height={400} alt="image" className="rounded-xl" />
                <button className='absolute top-4 left-4 bg-blue-600 rounded-xl px-2 text-white'>
                  News
                </button>
              </div>
              <div>
                <h1 className='text-base font-semibold text-[#8B8B8B] mt-4'>30 March 2024</h1>
                <p className='font-semibold text-2xl line-clamp-2 mt-5'>Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024</p>
                <div className='flex gap-2 mt-3'>
                  <Link href={"/"} className="text-base text-blue-600">Read More</Link>
                  <Image src={"/arrow.svg"} width={20} height={20} alt="image" />
                </div>
              </div>
            </div>

            <div className='relative mt-14'>
              <div>
                <Image src={"/konrad.jpg"} width={640} height={400} alt="image" className="rounded-xl" />
                <button className='absolute top-4 left-4 bg-blue-600 rounded-xl px-2 text-white'>
                  News
                </button>
              </div>
              <div>
                <h1 className='text-base font-semibold text-[#8B8B8B] mt-4'>30 March 2024</h1>
                <p className='font-semibold text-2xl line-clamp-2 mt-5'>Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024</p>
                <div className='flex gap-2 mt-3'>
                  <Link href={"/"} className="text-base text-blue-600">Read More</Link>
                  <Image src={"/arrow.svg"} width={20} height={20} alt="image" />
                </div>
              </div>
            </div>

            <div className='relative mt-14'>
              <div>
                <Image src={"/konrad.jpg"} width={640} height={400} alt="image" className="rounded-xl" />
                <button className='absolute top-4 left-4 bg-blue-600 rounded-xl px-2 text-white'>
                  News
                </button>
              </div>
              <div>
                <h1 className='text-base font-semibold text-[#8B8B8B] mt-4'>30 March 2024</h1>
                <p className='font-semibold text-2xl line-clamp-2 mt-5'>Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024</p>
                <div className='flex gap-2 mt-3'>
                  <Link href={"/"} className="text-base text-blue-600">Read More</Link>
                  <Image src={"/arrow.svg"} width={20} height={20} alt="image" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Hero