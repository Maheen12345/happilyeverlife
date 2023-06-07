import React from "react";
import { NavLink } from "react-router-dom";
function Form1()
{
    return(
<>
<h1>Form for University or College</h1>
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
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="firstname" className="form-label">First name:</label>
        <input type="text" className="form-control" id="firstname" placeholder="Enter your first name" name="name" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your first name</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="lastname" className="form-label">Last name:</label>
        <input type="text" className="form-control" id="lastname" placeholder="Enter your last name" name="name" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your last name</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="date" className="form-label">Date of birth:</label>
        <input type="date" className="form-control" id="date" placeholder="Enter your date of birth" name="date" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your date of birth</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your email</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="phone" className="form-label">Phone Number:</label>
        <input type="number" className="form-control" id="phone" placeholder="Enter your phone number" name="phone" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your phone number</div>
    </div>
    <div>
        <label for="cool" className="form-label">Gender:</label>
        <br/>
    <input type="radio" id="rani" name="gender" value="male"/>
<label for="rani">Male</label>
<br/>
<input type="radio" id="kion" name="gender" value="female"/>
<label for="kion">Female</label>
</div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="address" className="form-label">Address:</label>
        <br/>
        <textarea rows="7" cols="80"/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your address</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="city" className="form-label">City:</label>
        <input type="text" className="form-control" id="city" placeholder="Enter your city's name" name="city" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your city's name</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="pin" className="form-label">Pin Code:</label>
        <input type="number" className="form-control" id="pin" placeholder="Enter your pin code" name="pin" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your pin code</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="state">State: </label>
        <select name="state">
            <option>Select your state</option>
            <option selected>NSW</option>
            <option>Queensland</option>
            <option>Victoria</option>
            <option>Tasmania</option>
            <option>Western Australia</option>
            <option>South Australia</option>
            <option>Australian Capital Territory</option>
            <option>Northern Territory</option>
        </select>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="country">Country:</label>
        <select name="country">
            <option>Select your country</option>
            <option selected>Australia</option>
            <option>Canada</option>
            <option>India</option>
            <option>America</option>
            <option>Pakistan</option>
            <option>England</option>
            <option>France</option>
            <option>Italy</option>
        </select>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="haha" className="form-label">Hobbies:</label>
        <br/>
        <input id="Go Rickshaw Go!" type="checkbox" name="genre" value="reading"/>
        <label for="Go Rickshaw Go!"> Reading </label>
        <br/>
        <input id="nah" type="checkbox" name="Genre" value="writing"/>
        <label for="nah"> Writing </label>
        <br/>
        <input id="heh" type="checkbox" name="Genre" value="singing"/>
        <label for="heh"> Singing </label>
        <br/>
        <input id="yay" type="checkbox" name="Genre" value="dancing"/>
        <label for="yay"> Dancing</label>
        <br/>
        <input id="heh" type="checkbox" name="Genre" value="cooking"/>
        <label for="heh"> Cooking </label>
        <br/>
        <input id="bro" type="checkbox" name="Genre" value="drawing"/>
        <label for="bro"> Drawing </label>
        <br/>
        <label for="other">Other:</label>
        <input type="text" className="form-control" id="other" placeholder="Enter your hobby/s" name="other"/>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="qualify" className="form-label">Qualification:</label>
        <br/>
        <label for="class x" className="form-label">Class X:</label>
        <input type="text" className="form-control" id="class x" name="class x"/>
        <input type="text" className="form-control" id="class x" name="class x"/>
        <input type="text" className="form-control" id="class x" name="class x"/>
        <div className="invalid-feedback">Please enter your class</div>
        <label for="class xii" className="form-label">Class XII:</label>
        <input type="text" className="form-control" id="class xii" name="class xii"/>
        <input type="text" className="form-control" id="class xii" name="class xii"/>
        <input type="text" className="form-control" id="class xii" name="class xii"/>
        <div className="invalid-feedback">Please enter your class</div>
        <label for="graduation" className="form-label">Graduation:</label>
        <input type="text" className="form-control" id="graduation" name="graduation"/>
        <input type="text" className="form-control" id="graduation" name="graduation"/>
        <input type="text" className="form-control" id="graduation" name="graduation"/>
        <div className="invalid-feedback">Please enter your class</div>
        <label for="masters" className="form-label">Masters:</label>
        <input type="text" className="form-control" id="masters" name="masters"/>
        <input type="text" className="form-control" id="masters" name="masters"/>
        <input type="text" className="form-control" id="masters" name="masters"/>
        <div className="invalid-feedback">Please enter your class</div>
        </div>
    <div className="mb-3 mt-3" style={{width:"400"}}>
        <label for="city" className="form-label">Courses Applied For:</label>
        <br/>
        <input type="radio" id="dome" name="course" value="BCA"/>
        <label for="dome">BCA</label>
        <input type="radio" id="gnome" name="course" value="B.Com"/>
        <label for="gnome"> B.Com </label>
        <input type="radio" id="roam" name="course" value="B.Sc"/>
        <label for="roam">B.Sc</label>
        <input type="radio" id="know" name="course" value="B.A"/>
        <label for="know"> B.A </label>
    </div>
    <button type="submit" className="btn btn-success btn-sm">Submit</button>
    <button type="reset" className="btn btn-danger btn-sm">Reset</button>
</form>
</>
    );
}
export default Form1;