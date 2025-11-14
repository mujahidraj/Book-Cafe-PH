import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='md:px-24  sm:px-6 px-3 border-b border-slate-300 '>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm work-sans dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Listed Books</NavLink>
              </li>
              <li>
                <NavLink>Pages to Read</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost pacifico text-xl">Book Cafe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={  ({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-[#23BE0A] border border-[#23BE0A] mx-2" : ""
              }>Home</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-[#23BE0A] border border-[#23BE0A] mx-2" : ""
              }>Listed Books</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-[#23BE0A] border border-[#23BE0A] mx-2" : ""
              }>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink className="btn bg-[#23BE0A] rounded-lg text-white">Sign In</NavLink>
          <NavLink className="btn bg-[#59C6D2] rounded-lg text-white">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;