import jobs from '../jobs.json';
import { useState } from 'react';
import SingleJobListing from './singleJobListing';

const JobListing = () => {
    //show more jobs
    const[showJobs, setShowJobs] = useState(jobs.slice(0,3));
    const[change,setChange] = useState(false)
    
  return (
    <>
        <h1 className='text-center text-4xl text-indigo-700 font-bold'>Browse Jobs</h1>
        <div className='grid grid-cols-3 gap-4'>
        
        { showJobs.map(job=>(
            <div key={job.id} className='bg-gray-100 m-8 p-4 rounded-md shadow-lg'>
                <SingleJobListing job={ job }/>
            </div>
        )) }
        </div>
        <button onClick={()=>{
            //pass a function in set due to the state changing depend on the previous state
            setChange(prev=>!prev);
            !change ? 
            setShowJobs(jobs):
            setShowJobs(jobs.slice(0,3));
        }} className='bg-black text-white mb-4 mx-5 p-2 rounded-md'>
            { change ? 'Show Less Jobs' : 'Show More Jobs'}
        </button>
    </>
    
  )
}

export default JobListing