import { useNavigate } from 'react-router';
import pageError from '../../../assets/error-404.png';
import './ErrorPage.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
const ErrorPage = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center py-5'>
                <img src={pageError} alt="" />
            </div>
                <div className='text-center py-10'>
                    <h2 className='text-5xl text-[#001931] py-4 font-bold'>Oops, page not found!</h2>
                    <p className='text-[20px] text-[#627382] py-2'>The page you are looking for is not available.</p>
                    <button onClick={handleNavigate} className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white px-4 py-2 rounded cursor-pointer'>Go Back!</button>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default ErrorPage;