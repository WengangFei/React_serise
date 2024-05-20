import {useState} from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleJobListing = ({ job }) => {

//show more job descriptions
const[showSingleJobDescription,setShoSingleJobDescription] = useState(job.description.slice(0,120));
const[flag,setFlag] = useState(false);



  return (
    <>
        <p>{ job.type }</p>
        <h3 className='text-xl font-bold my-3'>{ job.title }</h3>
        <p>{ showSingleJobDescription }
            <button className='text-indigo-500' onClick={()=>{
                
                setFlag(prev=>!prev);
                !flag ? 
                setShoSingleJobDescription(job.description):
                setShoSingleJobDescription(job.description.slice(0,120));
            }}>
                { !flag ? '...... Show more' : '< < Show less'}
            </button>
        </p>
        <p className='text-indigo-600 my-3'>{ job.salary }</p>
        <div className='border-t-4 pt-4 text-red-500 mb-4 font-bold'>
            <FaMapMarker className='inline text-md mr-2'/>{ job.location }
            <Link className='bg-indigo-500 rounded-md text-white py-1 px-2 float-right'
             to={`/jobs/${job.id}`}>
                Read More
            </Link>
        </div>
        
    </>
  )
}

export default SingleJobListing