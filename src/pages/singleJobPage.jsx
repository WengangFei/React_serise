import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../component/spinner";
import SingleJobDetail from "../component/singleJobDetail";

const SingleJobPage = () => {
    const { id } = useParams();
    const[job,setJob] = useState([])
    useEffect(()=>{
        try{
            (async ()=>{
                const receiveData = await fetch(`/api/jobs/${id}`);
                const rawData = await receiveData.json();
                setJob(rawData);
            })()
        }catch(error){
            console.log(error)
        }
       
    },[])

    const show = job.length === 0 ?
        <Spinner /> :
        <>
            { <SingleJobDetail job={ job }/> }
        </>

  return (
    <div>
        { show }
    </div>
  )
}


export default SingleJobPage