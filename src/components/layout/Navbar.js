import  React,{useContext}  from 'react';
import {UserContext} from '../../UserContext'
import {Link} from 'react-router-dom'

const Navbar = () => {
  
  


 
    return (
          
      <>      
  <nav classname="">
  <div className="nav-wrapper green">
    <a href="/" className="brand-logo">Chat</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
    <i class="material-icons">menu</i></a>

    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="#  ">login</a></li>
      <li><a href="# ">Signup</a></li>
      <li><a href="# ">Logout</a></li>
    </ul>
  </div>
</nav>
    <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">login </a></li>
    <li><a href="badges.html">Signup</a></li>
    <li><a href="collapsible.html">Logout </a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  </> 
       
    )
}

export default Navbar
