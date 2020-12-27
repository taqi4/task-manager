import React, { useState } from 'react';
import '../Styles/StyledNav.css';
import {Link} from 'react-router-dom'

function Nav() {
    const[isActive,setActive]=useState(false);
      const toggleSideBar=(e)=>{
          setActive(!isActive);
               
    };
    return (<>


    <div className={isActive ? "active":"sidebar"}>
    <div className="toggle-btn" onClick={toggleSideBar}>
         <span></span>
         <span></span>
         <span></span>
     </div>
    
    
        <ul className="navLinks">
        
            <li className="navLink"><Link Style="   text-decoration: none;
    color: crimson;
    font-size: 1.8rem;" to='/'>Home </Link></li>
            
            
            <li className="navLink"><Link Style="   text-decoration: none;
    color: crimson;
    font-size: 1.8rem;"to='/Login.js'>Logout</Link></li>
            
        </ul>
        
</div>
<div className="logo" >
        <h2>Task Manager</h2>
    </div>
    </>
    );
}
export default Nav