import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import errorLogo from '../assets/images/error.gif';


const Error404Page = () => {
  return (
    <div className='text-center flex flex-col justify-center'>
        <h1 className='text-3xl font-bold my-12 text-red-500'>
            Woooops!!!
            <p>Something went wrong.</p>
        </h1>
        <div className='flex justify-center'>
            <img src={ errorLogo } alt='error log' width={250} height={250}/>
        </div>
        <div className='flex justify-center mt-8'>
            <FaExclamationTriangle className='text-3xl'/>
            <p className='mx-2 font-bold  text-2xl'>Page is not found!</p>
        </div>
        <div className='my-8'>
            <Link to='/' className=' font-bold my-8 bg-indigo-700 text-white w-fit px-2 py-1 rounded-md'>
                Go To Home Page
            </Link>
        </div>
        
    </div>
  )
}

export default Error404Page