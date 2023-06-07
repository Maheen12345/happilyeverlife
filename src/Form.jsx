import React from "react";
import { NavLink } from "react-router-dom";
function Form()
{
    return(
<>
<h1> Level 2 Bootstrap Form</h1>
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
<form method="post" className="was-validated">
    <div className="mb-3 mt-3">
        <label for="name" className="form-label">First Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your first name" name="name" required/>
        <div className="invalid-feedback">Please enter your first name</div>
    </div>
    <div className="mb-3 mt-3">
        <label for="cool" className="form-label">Last name:</label>
        <input type="text" className="form-control" id="cool" placeholder="Enter your last name" name="see" required/>
        <div className="invalid-feedback">Please enter your last name</div>
    </div>
   <div className="mb-3 mt-3">
        <label for="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required/>
        <div className="invalid-feedback">Please enter your email</div>
    </div>
    <div className="mb-3">
        <label for="pwd" className="form-label">Password:</label>
        <input type="password" className="form-control" id="pwd"  placeholder="Enter your password" name="pwd" required/>
        <div className="invalid-feedback">Please enter your password</div>
    </div>
    <div className="mb-3 mt-3">
        <label for="address" className="form-label">Address:</label>
        <input type="address" className="form-control" id="address" placeholder="Enter your address" name="address" required/>
        <div className="invalid-feedback">Please enter your address</div>
    </div>
    <div className="mb-3 mt-3">
        <label for="phone" className="form-label">Phone Number:</label>
        <input type="number" className="form-control" id="phone" placeholder="Enter your phone number" name="phonenumber" required/>
        <div className="invalid-feedback">Please enter your phone number</div>
    </div>
    <div className="form-check mb-3">
        <label for="yes" className="form-check-label">Do you agree to our terms and conditions?</label>
        <input className="form-check-input" type="checkbox" name="yes" required/>
        <div className="valid-feedback">Perfect! You're good to go!</div>
        <div className="invalid-feedback">Please tick this box to continue</div>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
</form>
</>
    );
}
export default Form;