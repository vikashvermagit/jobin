import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-10">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Job Section */}
                <div>
                    <div className='flex gap-2 items-center'>
                    <Image src={"/beg.svg"} width={20} height={20} alt="image"/>
                    <h2 className="text-lg font-semibold flex items-center">Job</h2>
                    </div>
                    <p className="text-gray-400 mt-4 text-lg">
                        Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold">Company</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><Link href="#" className='text-base'>About Us</Link></li>
                        <li><Link href="#">Our Team</Link></li>
                        <li><Link href="#">Partners</Link></li>
                        <li><Link href="#">For Candidates</Link></li>
                        <li><Link href="#">For Employers</Link></li>
                    </ul>
                </div>

                {/* Job Categories */}
                <div>
                    <h3 className="text-lg font-semibold">Job Categories</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><Link href="#">Telecommunications</Link></li>
                        <li><Link href="#">Hotels & Tourism</Link></li>
                        <li><Link href="#">Construction</Link></li>
                        <li><Link href="#">Education</Link></li>
                        <li><Link href="#">Financial Services</Link></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                    <p className="text-gray-400 mt-4">
                        Eu nunc pretium vitae pretium. Non metus elementum ultrices
                    </p>
                    <div className="mt-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                        />
                        <button className="w-full mt-2 p-2 bg-blue-600 rounded text-white">
                            Subscribe now
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mt-8 border-t border-gray-700 pt-4 text-gray-400 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>© Copyright Job Portal 2024. Designed by Vikash Verma</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer