import React from "react";
import { NavLink } from "react-router-dom";
function About()
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
      <div className="card">
        <div className="card-body" style={{backgroundColor:"violet"}}>
            <h3 style={{textAlign:"center"}}>Meet The Face Behind The Posts</h3>
            <img src="https://pbs.twimg.com/profile_images/1453828173930856448/B2_qU7W0_400x400.jpg" height="400" width="400"/>
            <img src="https://media.licdn.com/dms/image/C4E03AQFiFa89E7TA6g/profile-displayphoto-shrink_800_800/0/1662724632227?e=2147483647&v=beta&t=n2p6xfjijv9jUjlWgOF0LWMRMnrjS0qFNrktmR1FkHA" height="400" width="400"/>
            <img src="https://media.licdn.com/dms/image/C4E03AQEqnNgdCoBEgA/profile-displayphoto-shrink_800_800/0/1641618265282?e=2147483647&v=beta&t=2sK17pQ3StNeOFstUgTJarOHwaZnIMRsryP3g2JMVSw" height="400" width="400"/>
            <img src="https://media.licdn.com/dms/image/C4D03AQFwN6nO0YRi5g/profile-displayphoto-shrink_800_800/0/1656234054614?e=2147483647&v=beta&t=5zOC8GFJGwGxV5sYezwVVz5MYdz31uivfHln4OAxU8A" height="400" width="285"/>
            <p>Hey there. I'm Maheen Syeda and I am the owner of this blog. I made this blog as a pass time for myself and an inspiration for others. </p>
            <p> My blog talks about a lot of things, from how to make sock puppets to starting a business and making millions of dollars evryday. This blog is for both boys and girls, robots even! You can visit my blog anytime.</p>
            <p> Anyway, I just wanted to say please subscribe to my blog. Also, follow me on Twitter, Instagram, Pinterest and Facebook. Don't forget to subscribe to my Youtube channel. </p>
            <p>Can you do me a favour? Well it's more like me giving a favour to you but basically give me any feedback or any things that you want me to post about on this blog on the contact page. </p>
            <p>Contact me:</p>
            <p><mark><b>maheen.syeda@education.nsw.gov.au</b></mark></p>
            <p><mark><b>azizamaheen2010@gmail.com</b></mark></p>
            <p><mark><b>azizamaheen.s@gmail.com</b></mark></p>
            <p>My Social Media Accounts:</p>
            <p><mark>Twitter: <b>HappyLife_YAY!</b></mark></p>
            <p><mark>Instagram: <b>livehappily_forever</b></mark></p>
            <p><mark>Facebook: <b>happilyeverlife-asalways</b></mark></p>
            <p><mark>Pinterest: <b>ILoveMyHappyLife:)</b></mark></p>
            <p><mark>Youtube Channel: <b>My Happily Ever Life</b></mark></p>
            <p>Check my social media accounts out! And keep reading my blog!</p>
            </div>
      </div>

 </>
    );
}
export default About;
             
 
    