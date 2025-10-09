import { FaGithub, FaHome } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { RiInstallFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from 'react-router';
import Logo from '../../assets/logo.png';
import './Header.css';
const Header = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <nav>
            <div className="bg-base-100 shadow-sm">
                <div className="navbar max-w-7xl mx-auto">
                    <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                        </div>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                        <NavLink to='/'
                        className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 transition-all duration-200 
                        ${isActive
                            ? "text-[#632EE3] underline decoration-[#632EE3] underline-offset-4"
                            : "text-gray-700 hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:underline-offset-4"}`
                        }
                        >
                            <FaHome /> Home
                        </NavLink>
                        
                        
                        <NavLink to='/apps'
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 transition-all duration-200 
                            ${isActive
                                ? "text-[#632EE3] underline decoration-[#632EE3] underline-offset-4"
                                : "text-gray-700 hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:underline-offset-4"}`
                            }
                        >
                            <IoLogoAppleAppstore /> Apps
                        </NavLink>

                        <NavLink to='/installation'
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 transition-all duration-200 
                            ${isActive
                                ? "text-[#632EE3] underline decoration-[#632EE3] underline-offset-4"
                                : "text-gray-700 hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:underline-offset-4"}`
                            }
                            >
                            <RiInstallFill /> Installation
                        </NavLink>
                        </ul>
                    </div>
                    <a className="text-xl">
                        <button onClick={handleNavigate} className='flex gap-4 items-center cursor-pointer'><img className='w-10 h-10' src={Logo} alt="" /> <h3 className='text-transparent bg-clip-text bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] font-bold'>HERO.IO</h3></button>
                    </a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='/'
                        className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 transition-all duration-200 
                        ${isActive
                            ? "text-[#632EE3] underline decoration-[#632EE3] underline-offset-4"
                            : "text-gray-700 hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:underline-offset-4"}`
                        }
                        >
                            <FaHome /> Home
                        </NavLink>
                        
                        
                        <NavLink to='/apps'
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 transition-all duration-200 
                            ${isActive
                                ? "text-[#632EE3] underline decoration-[#632EE3] underline-offset-4"
                                : "text-gray-700 hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:underline-offset-4"}`
                            }
                        >
                            <IoLogoAppleAppstore /> Apps
                        </NavLink>

                        <NavLink to='/installation'
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 transition-all duration-200 
                            ${isActive
                                ? "text-[#632EE3] underline decoration-[#632EE3] underline-offset-4"
                                : "text-gray-700 hover:text-[#632EE3] hover:underline hover:decoration-[#632EE3] hover:underline-offset-4"}`
                            }
                            >
                            <RiInstallFill /> Installation
                        </NavLink>
                    </ul>
                    </div>

                    <div className="navbar-end">
                    <div className="rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] cursor-pointer">
                        <Link to="https://github.com/aboutamirhamza" target='_blank'>
                        <button className="px-4 py-2 text-white flex items-center gap-3 cursor-pointer">
                            <FaGithub /> Contribute
                        </button>
                        </Link>
                    </div>

                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Header;