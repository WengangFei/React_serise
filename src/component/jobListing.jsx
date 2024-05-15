import { useState, useEffect } from 'react';
import SingleJobListing from './singleJobListing';
import Spinner from './spinner';




const JobListing = () => {

    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    //show more jobs
    const[change,setChange] = useState(false)
    
    //fetching the data
    useEffect(()=>{
        const resp = async ()=>{
            try{
                const receiveData = await fetch('http://localhost:8000/jobs');
                const rawData = await receiveData.json();
                setData(rawData);
            }catch(error){
                console.log(error)
            }finally{
                setIsLoading(false);
            }
        }
        resp();
    },[])

    const show = isLoading ?  
                <Spinner loading={isLoading} />
                : 
                <div className='grid grid-cols-3 gap-4'>
                    {
                        (!change ? data.slice(0,3) : data.slice(0,6)).map(job=>
                            (
                                <div key={job.id} className='bg-gray-100 m-8 p-4 rounded-md shadow-lg'>
                                    <SingleJobListing job={ job }/>
                                </div>
                            )
                        )
                    }
                </div>
                
            
    
    const button = !isLoading && 
                    <button onClick={()=>{
                        // //pass a function in set due to the state changing depend on the previous state
                        setChange(prev=>!prev);
                    }} className='bg-black text-white mb-4 mx-5 p-2 rounded-md'>
                        { change ? 'Show Less Jobs' : 'Show More Jobs' }
                    </button>
                
   

  return (

    <>
        <h1 className='text-center text-4xl text-indigo-700 font-bold'>Browse Jobs</h1>

        <div>
            { show }
        </div>

        { button }
       
        
    </>
    
  )
}

export default JobListing