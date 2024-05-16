// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// import Spinner from "../component/spinner";
import SingleJobDetail from "../component/singleJobDetail";

const SingleJobPage = () => {
    // const { id } = useParams();
    const job = useLoaderData();

    // Method useing useEffect to fetch data

    // const[job,setJob] = useState([])
    // useEffect(()=>{
    //     try{
    //         (async ()=>{
    //             const receiveData = await fetch(`/api/jobs/${id}`);
    //             const rawData = await receiveData.json();
    //             setJob(rawData);
    //         })()
    //     }catch(error){
    //         console.log(error)
    //     }
       
    // },[])

    // const show = job.length === 0 ?
    //     <Spinner /> :
    //     <>
    //         { <SingleJobDetail job={ job }/> }
    //     </>

  return (
    // <div>
    //     { show }
    // </div>

    <div>
        { <SingleJobDetail job={ job }/> }
    </div>
  )
}

//method of use useLoader from react-router-dom to fetch data
const dataLoader = async({ params })=>{
    try{
        const receiveData = await fetch(`/api/jobs/${params.id}`);
        const rawData = await receiveData.json();
        return rawData;
    }catch(error){
        console.log(error)
    }
     
}

export { SingleJobPage as default, dataLoader }