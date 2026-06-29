import React, { useState } from 'react'
import Logoipsum from "../assets/logoipsum-300.png";
import { Link, NavLink , useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export const Header = () => {



  const [hidden,setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) ||false);
  const navigate = useNavigate();
  useEffect (() => {
    
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode)
    {
          document.documentElement.classList.add('dark');
    } 
    else
    {
          document.documentElement.classList.remove('dark');
    }

  
  } , [darkMode])

  const activeClass = "text-base text-blue-600 font-semibold block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0";
  const InActiveClass = "text-base text-gray-700 hover:text-blue-600 block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent";



  const handleSubmit = (event) => {

    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();

    return navigate(`/search?q=${queryTerm}`);
  }

  return (
    <header>
      
   <nav className="bg-neutral-primary border-b-2 dark:bg-gray-900 px-2 sm:px-4 py-2.5 w-full z-20 top-0 border-b border-default dark:border-b-1 dark:border-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logoipsum} className="h-7" alt="Cinemate Logo" />
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-black dark:text-white">Cinemate</span>
  </Link>

  <div id = "mobile-nav" className="flex items-center md:order-2">

    <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target= "navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className='flex item-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border boorder-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
      {darkMode ? (    <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M10 15a5 5 0 100-10 5 5 0 000 10zm0-13a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 11-2 0V2zm0 15a1 1 0 011 1v0a1 1 0 01-2 0v0a1 1 0 011-1zM4.22 5.64a1 1 0 011.41-1.41l.71.7A1 1 0 014.93 6.34l-.71-.7zm9.9 9.9a1 1 0 011.41-1.41l.71.7a1 1 0 11-1.41 1.41l-.71-.7zM2 11a1 1 0 100-2H1a1 1 0 100 2h1zm17 0a1 1 0 100-2h-1a1 1 0 100 2h1zM4.93 13.66a1 1 0 011.41 1.41l-.71.7a1 1 0 01-1.41-1.41l.71-.7zm9.9-9.9a1 1 0 011.41 1.41l-.71.7a1 1 0 11-1.41-1.41l.71-.7z" />
  </svg>) : (<svg
  className="w-5 h-5"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>)}
    </button>

    <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none">
      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
      <span className="sr-only">Search</span>
    </button>
    <label htmlFor="input-group-1" className="sr-only">Your Email</label>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
      </div>

      <form onSubmit={handleSubmit}>
              <input type="text" id="input-group-1" name="search" className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Search" autoComplete='off'/>

      </form>
      
    </div>
    <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
  </div>

    <div id = "nav-links" className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <form  onSubmit={handleSubmit}>
                  <input type="text" id="input-group-1" name='search' className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Search"  autoComplete='off'/>

        </form>
      </div>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? activeClass : InActiveClass } end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies/popular" className={({isActive}) => isActive ? activeClass : InActiveClass }>Popular</NavLink>
        </li>
        <li>
          <NavLink to="/movies/top" className={({isActive}) => isActive ? activeClass :  InActiveClass}>Top Rated</NavLink>
        </li>
          <li>
          <NavLink to="/movies/upcoming" className={({isActive}) => isActive ? activeClass : InActiveClass}>Upcoming</NavLink>
        </li>
      </ul>
    </div>
     
  </div>
</nav>

    </header>
  )
}
