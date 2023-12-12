
import { Link } from 'react-router-dom';


const Navbar = () => {
const navOption = <>

<div className="flex font-bold ">
   
    <li className='/'><Link to="" >Home</Link></li>
   <li className=''><Link to="">About</Link></li>
   <li><Link to="">Contact</Link></li>
  
    </div>

</>

  return (
    <div className='mx-auto max-w-3xl px-2 py-4'>
      <div className="navbar text-white 	 rounded-full my-2 mb-4 relative">
  <div className="navbar-start">
  <a className="btn btn-ghost text-xl">Mehedi</a>

   
  </div>
  <div className="navbar-center  lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
    {navOption}
    </ul> */}
  </div>
 

  <div className="navbar-end">
  <ul className="menu menu-horizontal px-5 mx-10">
    {navOption}
    </ul>
  </div>
</div>
    </div>
  );
};

export default Navbar;