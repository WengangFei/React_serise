// import { useEffect, useState } from 'react';
// import SingleJobListing from '../component/singleJobListing';
// import Spinner from '../component/spinner';
import JobListing from '../component/jobListing';



const JobsPage = () => {

  // const[AllJobs,setAllJobs] = useState([]);
  // const[isLoading,setIsLoading] = useState(true);

 
  // useEffect(()=>{
  //   try{
  //     (async ()=>{
  //       const receiveData = await fetch('http://localhost:8000/jobs');
  //       const data = await receiveData.json();
  //       setAllJobs(data);
  //     })()
  //   }catch(error){
  //     console.log(error)
  //   }finally{
  //     setIsLoading(false)
  //   }
   
  // },[])

  // return (
  //       isLoading ?
  //       <Spinner isLoading={isLoading}/> :
  //       <div>
  //           <h1 className="text-indigo-500 text-center text-4xl font-extrabold my-6">
  //             All Listing Jobs
  //           </h1>
  //           { AllJobs.map(job=>(
  //               <div key={job.id} className='bg-gray-100 m-8 p-4 rounded-md shadow-lg'>
  //                   <SingleJobListing job={ job }/>
  //               </div>
  //             )) 
  //           }
  //       </div>
  //     )

  return (
    <div className='bg-gray-100 m-8 p-4 rounded-md shadow-lg'>
      {/* isJobs is in jobs page. */}
        <JobListing isJobs />
    </div>

  )
  

}

export default JobsPage