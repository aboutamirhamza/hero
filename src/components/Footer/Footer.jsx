import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
import footerLogo from '../../assets/logo.png';
const Footer = () => {
    return (
        <div>
            <div className='bg-[#001931]'>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='flex py-9 justify-between px-10'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-10 h-10' src={footerLogo} alt="" />
                            <h3 className='text-white text-base font-bold'>HERO.IO</h3>
                        </div>
                        <div>
                            <h3 className='text-white text-base font-medium'>Social Links</h3>
                            <div className='flex gap-4 mt-4'>
                                <Link to=""><div className='flex justify-center items-center text-black bg-white rounded-full p-2'><FaXTwitter /></div></Link>
                                <Link to=""><div className='flex justify-center items-center text-black bg-white rounded-full p-2'><FaLinkedinIn /></div></Link>
                                <Link to=""><div className='flex justify-center items-center text-black bg-white rounded-full p-2'><FaFacebookF /></div></Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#62738267]"></div>
                    <div>
                        <h3 className="text-center text-[#FAFAFA] text-base py-6">Copyright © 2025 - All right reserved</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;