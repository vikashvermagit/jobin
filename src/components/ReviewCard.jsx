import Image from 'next/image'
import React from 'react'

const ReviewCard = () => {
    return (
        <div className=" rounded-3xl border border-neutral-800 bg-black p-8 shadow-sm max-w-sm mx-auto mt-14">

            <div className="text-violet-500 flex gap-2">
                <Image
                    src="/star.svg"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="text-violet-500"
                />
                <Image
                    src="/star.svg"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="text-violet-500"
                />
                <Image
                    src="/star.svg"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="text-violet-500"
                />
                <Image
                    src="/star.svg"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="text-violet-500"
                />
                <Image
                    src="/star.svg"
                    alt="Star Icon"
                    width={20}
                    height={20}
                    className="text-violet-500"
                />

            </div>

            <h3 className="my-4 mb-0 text-base font-normal text-start items-start text-gray-400">
                I have been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always
                available and willing to help. Highly recommend!
            </h3>


            <div className="mt-6 flex items-center gap-6 ">
                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                    <div className=" inline-block overflow-hidden rounded-lg border border-neutral-800">
                        <Image
                            alt="image"
                            src="/konrad.jpg"
                            width={50}
                            height={50}
                            className="inline-block"
                            loading="lazy"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>
                <div>
                    <p className="leading-relaxed tracking-wide text-gray-200">Melissa Smith</p>
                    <p className="text-xs leading-relaxed tracking-wide text-gray-400">Marketing Manager</p>
                </div>
            </div>


        </div>
    )
}

export default ReviewCard