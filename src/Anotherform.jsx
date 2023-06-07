import React from "react"
function Anotherform()
{
    return(
<>
<h1>New form</h1>
<form method="post" name="fall" onsubmit="return(validator())">
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="firstname" className="form-label">First Name:</label>
        <input type="text" className="form-control" id="firstname" placeholder="Max 50 characters" name="firstname" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your first name</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="lastname" className="form-label">Last Name:</label>
        <input type="text" className="form-control" id="lastname" placeholder="Max 50 characters" name="lastname" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your last name</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your email</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="mobile" className="form-label">Mobile Number:</label>
        <input type="number" className="form-control" id="mobile" placeholder="10 digits allowed" name="mobile" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your mobile number</div>
    </div>
    <div className="mb-3 mt-3">
        <label for="gender">Gender:</label>
        <br/>
        <input type="radio" id="male" name="gender" value="male"/>
        <label for="male">Male</label>
        <br/>
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">Female</label>
        <br/>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="DOB" className="form-label">Date Of Birth(DOB):</label>
        <input type="date" className="form-control" id="DOB" placeholder="Enter your date of birth" name="DOB" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your date of birth</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="address" className="form-label">Address:</label>
        <textarea rows="7" cols="80"></textarea>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="city" className="form-label">City:</label>
        <input type="text" className="form-control" id="city" placeholder="Enter your city" name="city" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your city</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="pin" className="form-label">Pin Code:</label>
        <input type="number" className="form-control" id="pin" placeholder="Enter your pin code" name="pin" required/>
        <div className="valid-feedback"></div>
        <div className="invalid-feedback">Please enter your pin code</div>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="state" className="form-label">State:</label>
        <select name="state">
            <option>Select your state</option>
            <option selected>NSW</option>
            <option>Queensland</option>
            <option>Western Australia</option>
            <option>South Australia</option>
            <option>Victoria</option>
            <option>Australian Capital Territory</option>
            <option>Northern Territory</option>
            <option>Tasmania</option>
        </select>
    </div>
    <div className="mb-3 mt-3" style={{width:"400px"}}>
        <label for="country" className="form-label">Country:</label>
        <select name="country">
        <option selected>Australia</option>
        </select>
    </div>
    
</form>
</>
    );
}
export default Anotherform;