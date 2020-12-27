import React from 'react';
import '../Styles/StyledLogin.css';
import {Link} from 'react-router-dom'

function Login() {
 const renderPosts= async() =>{
   let uri='http://localhost:3000/users';
 const res = await fetch(uri);
 const users = await res.json();
 console.log(users);
  }
 window.addEventListener('DOMContentLoaded',() => renderPosts());
 
 return ( 
 
<>
<form className="box" action="./Home.js" >
        <h1>Trulloy </h1>
        <div className="dorem"></div>
        <h2>Task Manager</h2>

        <div className="username">
            <input type="text" name="username" id="username" autocomplete="off" placeholder="Username" onblur="this.placeholder='Username'" onfocus="this.placeholder = 'Enter username'" />
            <label for="username" class="label-name">
          <span className="content-name">Username:</span>
        </label>
        </div>
        <div className="password">
            <input type="password" name="" placeholder="Password" onblur="this.placeholder='Password'" onfocus="this.placeholder='Enter password'" />
            <label for="password" className="label-name">
          <span className="content-name">Password:</span>
        </label>
        </div>
        
        <Link to = '/' Style="text-decoration : none"><input type="submit" name="" value="Login" /></Link>
        </form>
</>
    );
}

export default Login;