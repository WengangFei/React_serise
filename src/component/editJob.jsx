import { useLoaderData } from "react-router-dom";



function EditJob() {

    const job = useLoaderData();
    console.log(job)
   
  return (
    <div>editJob</div>
  )
}


export default EditJob 