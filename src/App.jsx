
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
import BrowseJobsPage from './pages/browseJobsPage';
import PostJobs from './pages/postJobsPage';
import Error404Page from './pages/404Page';
import SingleJobPage, { dataLoader } from './pages/singleJobPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    // parent layout page
    <Route path='/' element={<MainLayOut />}>
      {/* index indicate the home page  */}
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      {/* : is indicating the variable follow it is a dynamic variable */}
      {/* loader is to call the loader function that define and fetch the data in the element component page */}
      <Route path='/jobs/:id' element={<SingleJobPage />} loader={dataLoader} />
      <Route path='/add-job' element={ <AddJob />}/>
      <Route path='/contact' element={ <Contact />}/>
      <Route path='/browse-jobs' element={ <BrowseJobsPage />}/>
      <Route path='/post-jobs' element={ <PostJobs />}/>
      <Route path='*' element={ <Error404Page />}/>
    </Route>
  )
);


const App = () => {

  return <RouterProvider router={router}/>

}

export default App