import { FaMapMarker } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const SingleJobDetail = ({ job }) => {
  return (
    <div className='p-6'>
        <p>{ job.type }</p>
        <h3 className='text-xl font-bold my-3'>{ job.title }</h3>
        <p className='indent-8'> { job.description } </p>
        <p className='text-indigo-600 my-3'>{ job.salary }</p>
        <div className='border-t-4 pt-4 text-red-500 mb-4 font-bold'>
            <FaMapMarker className='inline text-md mr-2'/>{ job.location }
        </div>
        <div>
            <p className='text-2xl text-indigo-500 font-bold'>About { job.company.name}:</p>
            <p className='indent-8 py-4'>{job.description}</p>
            <div className='flex'>
                <MdEmail className='text-2xl'/>
                <p className='text-gray-500 px-2'>{ job.company.contactEmail}</p>
            </div>
           <div className='flex py-2'>
                <FaPhoneSquareAlt className='text-2xl'/> 
                <p className='text-gray-500 px-2'>{ job.company.contactPhone }</p>
           </div>

        </div>

    </div>
  )
}

export default SingleJobDetail