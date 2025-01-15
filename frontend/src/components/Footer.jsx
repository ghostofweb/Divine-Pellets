import React from 'react';
import { assets, social } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Company Info Section */}
                <div className="space-y-6">
                    <div className="flex items-center justify-center md:justify-start">
                        <img src={assets.headerlogo} className='w-40 md:w-56' />
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">Divine Pellets</h2>
                    <p className="text-gray-300 max-w-md text-center md:text-left">
                    At Divine Pellets, we are passionate about producing high-quality biomass pellets from a wide range of raw materials. As a new and dynamic player in the industry, we are focused on providing sustainable energy solutions. Our dedicated team works tirelessly to create efficient, eco-friendly pellets that contribute to a cleaner and greener future.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="space-y-6 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold uppercase">Quick Links</h3>
                    <ul className="space-y-4">
                        {[
                            { name: 'About', link: '/about' },
                            { name: 'What we do', link: '/what-we-do' },
                            { name: 'Gallery', link: '/gallery' },
                            { name: 'Make an Inquiry', link: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.link}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="space-y-6 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold uppercase">Contact Info</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 justify-center md:justify-start">
                            <span className="text-gray-300">+91 73597 72393</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center md:justify-start">
                            <span className="text-gray-300">+91 92656 50051</span>
                        </div>
                        <div className="flex items-center space-x-2 justify-center md:justify-start">
                            <span className="text-gray-300">example@gmail.com</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 pt-4 justify-center md:justify-start">
                            <a href="https://www.instagram.com/divine_pellets/" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                                <img src={social.instagram} className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
