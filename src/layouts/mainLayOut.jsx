import { Outlet } from "react-router-dom";
import Navbar from '../component/navbar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const MainLayOut = () => {
  return (
    <>
        <Navbar />
        {/* Outlet is children component in main layout page */}
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayOut