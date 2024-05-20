import { FaMapMarker } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleJobDetail = ({ job,deleteJob }) => {
  const navigate = useNavigate();
  return (
    <>
      <Link to='/jobs' className='text-indigo-500 mx-10 font-bold'>
        {'<-- '}Go Back
      </Link>
      <div className='px-6 flex flex-row gap-5'>
        
        <div className='basis-2/3 p-4 '>
          <div className='shadow-lg p-4 bg-indigo-50 rounded-lg'>
            <p>{ job.type }</p>
            <h3 className='text-xl font-bold my-3'>{ job.title }</h3>
            
            <div className='pt-4 text-red-500 mb-4 font-bold'>
              <FaMapMarker className='inline text-md mr-2'/>{ job.location }
            </div>
          </div>
          <div className='shadow-lg p-4 rounded-lg my-6 bg-indigo-50'>
            <p className='text-xl font-bold'>Job Description:</p>
            <p className='indent-8'> { job.description } </p>
            <p className='text-indigo-600 my-3'>{ job.salary }</p>
          
          </div>

        </div>
        <div className='basis-1/3 '>
          <div className='bg-indigo-50 p-4 rounded-md my-4'>
            <p className='text-2xl text-indigo-500 font-bold'>About { job.company.name}:</p>
            <p className='indent-8 py-4 border-b-2'>{job.description}</p>
            <div className='flex py-4'>
                <MdEmail className='text-2xl'/>
                <p className='text-gray-500 px-2'>{ job.company.contactEmail}</p>
            </div>
            <div className='flex'>
                <FaPhoneSquareAlt className='text-2xl'/> 
                <p className='text-gray-500 px-2'>{ job.company.contactPhone }</p>
            </div>

          </div>
          
          <div className='shadow-lg rounded-md p-4 my-6 bg-indigo-50'>
            <p className='text-xl font-bold pb-4'>Manage Job</p>
            <Link className='bg-indigo-500 px-2 py-1.5 rounded-md text-white my-4' to={`/edit-job/${job.id}`}>
              Edit Job
            </Link>
            <button className='bg-red-500 px-2 py-1 rounded-md text-white my-4 mx-6' 
              onClick={()=>{
                  const confirm = window.confirm('Are you sure yo want to delete the job?')
                  if(!confirm) return

                  deleteJob(job.id);
                  toast('Job delete successful!');
                  navigate('/jobs');
                }
              }
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleJobDetail