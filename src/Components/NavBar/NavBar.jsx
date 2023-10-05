import { Link } from "react-router-dom";


const NavBar = () => {
  const nav = <>
  <li className="ms-2"><Link to="/">Home</Link></li>
  <li className="ms-3"><Link to="blog">Blog</Link></li>
  <li className="ms-4"><Link to="about">About</Link></li>

</>


return (
   <div className="sm:grid grid-cols-1 text-white">
     <div className="navbar bg-gray-250">
     <div className="navbar-start">
   <div className="dropdown">
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
    </ul>
    <a className=" normal-case text-2xl font-bold ms-5 px-11">MEHEDI</a>
 
     </div>
    </div>


  
    <div className="navbar-center">


    <ul className="menu menu-horizontal ">
     {nav}
      </ul>

    </div>
    </div>
   </div>
    );
};

export default NavBar;