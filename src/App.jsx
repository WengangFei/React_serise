
import { Route,
         createBrowserRouter,
         createRoutesFromElements,
         RouterProvider
} from 'react-router-dom';
import HomePage from './pages/homePage';
import MainLayOut from './layouts/mainLayOut';
import JobsPage from './pages/jobsPage';
import AddJob from './pages/addJobPage';
import Contact from './pages/contactPage';
import Error404Page from './pages/404Page';
import SingleJobPage, { dataLoader } from './pages/singleJobPage';
import EditJob from './component/editJob';



const App = () => {

  //this function send the addJob page form all inputs to the backend.
  const addJobSubmit = async (formData)=>{

    const resp = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type': 'application/JobsPage'
      },
      body: JSON.stringify(formData)
    })
   
    return 
  }

  //delete a job
  const deleteJob = async(id)=>{
    const resp = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    })
   
    return
  }

  //edit job

  const editJob = async(formData)=>{

    const resp = await fetch(`/api/jobs/${formData.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/JobsPage'
      },
      body: JSON.stringify(formData)
    })
   
    return 
  }




  const router = createBrowserRouter(

    createRoutesFromElements(
      // parent layout page
      <Route path='/' element={<MainLayOut />}>
        {/* index indicate the home page  */}
        <Route index element={<HomePage />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        {/* : is indicating the variable follow it is a dynamic variable */}
        {/* loader is to call the loader function that define in singleJobPage and fetch the data */}
        <Route path='/jobs/:id' element={<SingleJobPage deleteJob={deleteJob}/>} loader={dataLoader} />
        <Route path='/add-job' element={ <AddJob addJobSubmit={addJobSubmit}/>}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/edit-job/:id' element={<EditJob  editJob={ editJob }/>} loader={dataLoader} />
        <Route path='*' element={ <Error404Page />}/>
      </Route>
    )
  );




  return <RouterProvider router={router}/>

}

export default App