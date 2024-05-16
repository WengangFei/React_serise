
import { Route,
         createBrowserRouter,
         createRoutesFromElements,
         RouterProvider
} from 'react-router-dom';
import HomePage from './pages/homePage';
import MainLayOut from './layouts/mainLayOut';
import JobsPage from './pages/jobsPage';
import AddJob from './pages/addJob';
import Contact from './pages/contact';
import BrowseJobs from './pages/browseJobs';
import PostJobs from './pages/postJobs';
import Error404Page from './pages/404Page';
import SingleJobPage from './pages/singleJobPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    // parent layout page
    <Route path='/' element={<MainLayOut />}>
      {/* index indicate the home page  */}
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      {/* : is indicating the variable follow it is a dynamic variable */}
      <Route path='/jobs/:id' element={<SingleJobPage />}/>
      <Route path='/add-job' element={ <AddJob />}/>
      <Route path='/contact' element={ <Contact />}/>
      <Route path='/browse-jobs' element={ <BrowseJobs />}/>
      <Route path='/post-jobs' element={ <PostJobs />}/>
      <Route path='*' element={ <Error404Page />}/>
    </Route>
  )
);


const App = () => {

  return <RouterProvider router={router}/>

}

export default App