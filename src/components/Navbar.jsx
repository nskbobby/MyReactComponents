import React  from "react";
import './Navbar.css';

function Navbar({logoName}){
return(
<header className="d-flex justify-content-between w-100 px-4 py-2 rounded navBar">
    <h4 className="logoName display-4">{logoName} </h4>
  
    <nav className="navItems navbar navbar-expand-md ">
    <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </button>   
        <div className="collapse navbar-collapse " id='navbarNav'>
    <ul className="d-flex gap-5 list-unstyled navbar-nav text-end lead">
        <li className="nav-item home"><a href="/" className="text-decoration-none text-reset">Home</a></li>
        <li className="nav-item about"><a href="/" className="text-decoration-none text-reset">About</a></li>
        <li className="nav-item contactus"><a href="/" className="text-decoration-none text-reset">contact us</a></li>
        <li className="nav-item projects"><a href="/" className="text-decoration-none text-reset">projects</a></li>
    </ul>
    </div>
    </nav>
</header>
); 

}

export default Navbar;
