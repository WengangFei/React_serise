import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-layout'>
        <div className='col-span-4 mx-8 mt-3 flex'>
          <img src={ logo } alt='logo' className='object-contain' width={65} height={55}/>
          <p className='text-white font-bold text-3xl mx-4'>
            React Jobs
          </p>
        </div>
        
        <Link className='nav-links bg-black' to='/'>Home</Link>
        <Link className='nav-links' to='/jobs'>Jobs</Link>
        <Link className='nav-links' to='/add-job'>Add Job</Link>
        <Link className='nav-links' to='/contact'>Contact</Link>
      </div>
      
       
    </nav>
  )
}

export default Navbar