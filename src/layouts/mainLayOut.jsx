import { Outlet } from "react-router-dom";
import Navbar from '../component/navbar';

const MainLayOut = () => {
  return (
    <>
        <Navbar />
        {/* Outlet is children component in main layout page */}
        <Outlet />
    </>
  )
}

export default MainLayOut