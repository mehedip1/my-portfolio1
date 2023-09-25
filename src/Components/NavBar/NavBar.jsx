import { Link } from "react-router-dom";


const NavBar = () => {
  const nav = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="blog">Blog</Link></li>
  <li><Link to="about">About</Link></li>
  <li><Link to="login">Contact us</Link></li>
</>


return (
   <div className="sm:grid grid-cols-1 mt-2">
     <div className="navbar fixed z-10 bg-opacity-30 bg-gray-250">
     <div className="navbar-start">
   <div className="dropdown">
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
   
    </ul>
  
 
</div>

  
  <a className="btn  hover:bg-lime-400 normal-case text-2xl font-bold">MEHEDI</a>


</div>
<div className="navbar-center lg:flex">
<ul className="menu menu-horizontal ">
{nav}
</ul>
</div>
<div className="navbar-end">
<Link to='login' className="btn btn-outline btn-secondary">Book Now</Link>



</div>
</div>
   </div>
    );
};

export default NavBar;