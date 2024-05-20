// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// import Spinner from "../component/spinner";
import SingleJobDetail from "../component/singleJobDetail";

const SingleJobPage = ({ deleteJob }) => {
    // const { id } = useParams();
    const job = useLoaderData();
   

  return (


    <div>
        { <SingleJobDetail job={ job } deleteJob={deleteJob}/> }
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