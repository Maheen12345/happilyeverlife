import React from "react";
import { NavLink } from "react-router-dom";
function Contact()
{
    return(
<>
<nav className="navbar navbar-expand-sm">
<div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/myblog">My Blog</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>

</nav>
<h2 style={{textAlign:"center"}}>Contact Me and Stay Linked</h2>
<div className="d-grid">
<button type="button" class="btn btn-danger btn-block" data-bs-toggle="modal" data-bs-target="#bag">
Subscribe
</button>
</div>
<div class="modal fade" id="bag">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title"> Let The Posts Come To You! </h4>
<button type="button" class="btn-close" data-bs-dismiss="modal"> </button>
</div>
<div class="modal-body">
  <img src="https://www.impactbnd.com/hubfs/15%20Brands%20Using%20Subscribe%20Pages%20to%20Attract%20Blog%20Subscribers.jpg" alt="subscribe" height="300" width="450"/>
  <br/><br/>
<form>
<label for="wow">First Name: </label>
<input id="wow" type="text"/>
<br/> <br/>
<label for="haha">Last Name: </label>
<input id="haha" type="text"/>
<br/><br/>
<label for="mwah">Email: </label>
<input id="mwah" type="email"/>
<br/><br/>
<label for="nah">Phone Number: </label>
<input id="nah" type="number"/>
</form>
</div>

<div class="modal-footer">
<button type="button" class="btn btn-danger" data-bs-dismiss="modal">  Subscribe  </button>
</div>



</div>
</div>
</div>
<br/>
<h3 style={{textAlign:"center",color:"blue"}}>Let Me Know What's On Your Mind</h3>
<form>
  <label for="first name">First Name: </label>
  <input id="first name" type="text"/>
  <br/><br/>
  <label for="last name">Last Name: </label>
  <input id="last name" type="text"/>
  <br/><br/>
  <label for="email">Email: </label>
  <input id="email" type="email"/>
  <br/><br/>
  <label for="leave">Leave us a message: </label>
  <br/>
  <textarea rows="7" cols="80"></textarea>
  <br/>
</form>
<button type="button" className="btn btn-success">Submit</button>
</>
    );
}
export default Contact;