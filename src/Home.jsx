import React from "react";
import { NavLink } from "react-router-dom";
function Home()
{
    return(
        <>
            <h1 style={{color:"blue"}}><marquee>Happily Ever Life</marquee></h1>
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
<div className="card-group">
<div  className="card">
<div className="card-body">
<img src="https://m.media-amazon.com/images/I/71CiqURtADL.jpg" height="600" width="400"/>
 </div>
</div>

<div className="card">
<div className="card-body">
  <img src="https://thumbs.dreamstime.com/b/modern-kitchen-white-background-54025077.jpg" height="600" width="400"/>
  </div>
</div>

<div  className="card">
<div className="card-body">
<img src="https://m.media-amazon.com/images/I/81-bVNjjvHL._AC_SL1500_.jpg" height="600" width="400"/>
 </div>
</div>
</div>
<h1 style={{color:"hotpink",textAlign:"center",backgroundColor:"cyan"}}>My Life. My Thoughts. My Blog.</h1>
<h1 style={{color:"cyan",textAlign:"center",backgroundColor:"hotpink"}}>WELCOME!</h1>
<h2 style={{textAlign:"center"}}><u>Latest Posts</u></h2>
<div className="card-group">
<div className="card">
<div className="card-body">
<p style={{color:"grey",fontSize:"15px",textAlign:"end"}}>25th April</p>
<img src="https://s2982.pcdn.co/wp-content/uploads/2019/08/image-of-open-book.jpg.optimal.jpg" className="card-img-top" height="200" width="200"/>
<h4 className="card-title">Writing Stories </h4>
<p className="card-text">Lots of people think that writing is <i>boring</i>, but</p>
<p className="card-text">it's actually not. In fact, writing is very <i>relaxing</i> for many people.</p>
<p className="card-text">Also, you can get very <b>rich and famous</b> becuase of writing...</p>
<button type="button" className="btn btn-outline-primary">Read Full Article</button>
</div>
</div>

<div className="card">
<div className="card-body">
<p style={{color:"grey",fontSize:"15px",textAlign:"end"}}>25th April</p>
<img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" className="card-img-top" height="200" width="200"/>
<h4 className="card-title">Biryani </h4>
<p className="card-text">I love biryani. It is literally my favourite food.</p>
<p className="card-text">But it actually takes <i>lots of effort and time</i> to make it.</p>
<p className="card-text">If you really want to make the <b>perfect</b> biryani...</p>
<button type="button" className="btn btn-outline-primary">Read Full Article</button>
</div>
</div>
<div className="card">
<div className="card-body">
<p style={{color:"grey",fontSize:"15px",textAlign:"end"}}>25th April</p>
<img src="https://preview.redd.it/i-love-fantasy-and-libraries-are-a-fun-and-quiet-place-to-v0-cvjtg5fqtnaa1.png?auto=webp&s=8d470668f4cfe36819811a3539e7f6971b69c882" className="card-img-top" height="200" width="200"/>
<h4 className="card-title"> Library </h4>
<p className="card-text">If you want to do your work in <i>peace</i>, or you just</p>
<p className="card-text">want some <i>quiet time to yourself</i>, the library is your</p>
<p className="card-text">place. Your local library is a very <b>special</b> place...</p>
<button type="button" className="btn btn-outline-primary">Read Full Article</button>
</div>
</div>
</div>
<div className="d-grid">
<button type="button" className="btn btn-dark" style={{color:"white"}}> <b> All Posts </b>  </button>
</div>
        </>
    );
}
export default Home;