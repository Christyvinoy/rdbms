import React from 'react';
import l from './l.png'


const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-gray-900 md:p-8 lg:p-10 ">
                <div className="mx-auto max-w-screen-xl text-center">
                    {/* PNG Image */}
                    <div className="flex justify-center items-center">
                    <img className='mr-2 h-8 flex justify-center items-center' src={l} alt="logo" />
                    {/* Text */}
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white">
                        Wealth Nest
                    </a>
                    </div>
                    <p className="my-6 text-gray-500 dark:text-gray-400">All you need is to invest in a good place....Don’t delay—Invest today with Wealth Nest</p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Our Team</a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022-2026 <a href="#" className="hover:underline">WealthNest</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
