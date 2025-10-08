import { useNavigate } from 'react-router';
import pageError from '../../../assets/error-404.png';
import './ErrorPage.css';
const ErrorPage = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={pageError} alt="" />
            </div>
                <h2 className='text-5xl text-[#001931] py-4 font-bold'>Oops, page not found!</h2>
                <p className='text-[20px] text-[#627382] py-2'>The page you are looking for is not available.</p>
                <button onClick={handleNavigate} className='bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white px-4 py-2 rounded cursor-pointer'>Go Back!</button>
        </div>
    );
};

export default ErrorPage;