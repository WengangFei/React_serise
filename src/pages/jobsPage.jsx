import AllJobs from '../localJobs.json';
import SingleJobListing from '../component/singleJobListing';

const JobsPage = () => {
  return (
    <div>
        <h1 className="text-indigo-500 text-center text-4xl font-extrabold my-6">
          All Listing Jobs
        </h1>
        { AllJobs.map(job=>(
            <div key={job.id} className='bg-gray-100 m-8 p-4 rounded-md shadow-lg'>
                <SingleJobListing job={ job }/>
            </div>
          )) 
        }
    </div>
  )
}

export default JobsPage