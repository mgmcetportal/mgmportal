import React from 'react'
const Header = () => {
  return (
    <div className="main-header ">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Home</a></li>
        <li>
          <a href='/'>About Us</a>
          <ul className="p-2">
            <li><a href='/'>Institute</a></li>
            <li><a href='/'>Chairman's Message</a></li>
            <li><a href='/'>Trustee's Message</a></li>
            <li><a href='/'>Vice Principal Message</a></li>
            <li><a href='/'>Core Value</a></li>
            <li><a href='/'>Code Of Conduct</a></li>

          </ul>
        </li>
        <li>
          <a href='/'>Academic</a>
          <ul className="p-2">
            <li><a href='/'>Admission</a></li>
            <li><a href='/'>Scholarship </a></li>
            <li><a href='/'>Achievement</a></li>
            <li><a href='/'>Committee</a></li>
            <li><a href='/'>Feedback</a></li>
            <li><a href='/'>Library</a></li>
          </ul>
        </li>
        <li>
          <a href='/'>Department</a>
          <ul className="p-2">
          <li><a href='/'>Under Graduate</a></li>
            <li><a href='/'>Post Graduate</a></li>
            <li><a href='/'>PHD Courses</a></li>
          </ul>
        </li>
        <li>
          <a href='/'>Placement</a>
          {/* <ul className="p-2">
            <li><a href='/'>Submenu 1</a></li>
            <li><a href='/'>Submenu 2</a></li>
          </ul> */}
        </li>
        <li>
          <a href='/'>Campus Life</a>
          <ul className="p-2">
            <li><a href='/'>Club</a></li>
            <li><a href='/'>Student Corner</a></li>
            <li><a href='/'>Facilities</a></li>
          </ul>
        </li>
        <li>
          <a href='/'>Exam Cell</a>
          <ul className="p-2">
            <li><a href='/'>Video Page</a></li>
          </ul>
        </li>
        <li><a href='/'>NIRF</a></li>
        <li><a href='/'>Event</a></li>
        <li><a href='/'>Gallery</a></li>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-xl">MGM CET</a>
    <img src=" " alt="" />
  </div>
  
  {/* Desktop Side View */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/'>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>About Us</summary>
          <ul className="p-2">
            <li><a href='/'>Institute</a></li>
            <li><a href='/'>Chairman's Message</a></li>
            <li><a href='/'>Trustee's Message</a></li>
            <li><a href='/'>Vice Principal Message</a></li>
            <li><a href='/'>Core Value</a></li>
            <li><a href='/'>Code Of Conduct</a></li>

          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Academic</summary>
          <ul className="p-2">
          <li><a href='/'>Admission</a></li>
            <li><a href='/'>Scholarship </a></li>
            <li><a href='/'>Achievement</a></li>
            <li><a href='/'>Committee</a></li>
            <li><a href='/'>Feedback</a></li>
            <li><a href='/'>Library</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Department</summary>
          <ul className="p-2">
            <li><a href='/'>Under Graduate</a></li>
            <li><a href='/'>Post Graduate</a></li>
            <li><a href='/'>PHD Courses</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Campus Life</summary>
          <ul className="p-2">
          <li><a href='/'>Club</a></li>
            <li><a href='/'>Student Corner</a></li>
            <li><a href='/'>Facilities</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Exam Cell</summary>
          <ul className="p-2">
            <li><a href='/'>Video Page</a></li>
          </ul>
        </details>
      </li>
      <li><a href='/'>Placement</a></li>
      <li><a href='/'>NIRF</a></li>
      <li><a href='/'>Events</a></li>
        <li><a href='/'>Gallery </a></li>
    </ul>
  </div>
  {/* Desktop side view end */}

  <div className="navbar-end ">
    <a href='/' className=" h-0"> </a>
  </div>
</div>
    </div>
  );
}

export default Header;
