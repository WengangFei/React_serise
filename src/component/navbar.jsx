import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  // function to change the active page link to black back ground.
  const changeActivePageColor = ({ isActive })=> isActive ? 'nav-active-links' : 'nav-links';

  return (
    <nav>
      <div className='nav-layout'>
        <div className='col-span-4 mx-8 mt-3 flex'>
          <img src={ logo } alt='logo' className='object-contain' width={65} height={55}/>
          <p className='text-white font-bold text-3xl mx-4'>
            React Jobs
          </p>
        </div>
        
        <NavLink className={(s)=>console.log(s)} to='/'>
          Home
        </NavLink>
        <NavLink className={changeActivePageColor} to='/jobs'>
          Jobs
        </NavLink>
        <NavLink className={changeActivePageColor} to='/add-job'>
          Add Job
        </NavLink>
        <NavLink className={changeActivePageColor} to='/contact'>
          Contact
        </NavLink>
      </div>
      
       
    </nav>
  )
}

export default Navbar