import React from "react";
import { NavLink } from "react-router-dom";
function Myblog()
{
    return(
        <>
        <h1 style={{textAlign:"center"}}>The Feed</h1>
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
<button type="button" className="btn btn-outline-warning">Log In/Sign Up</button>
<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://pyxis.nymag.com/v1/imgs/6b4/d06/aea385e89076580b40780e8634e78f7116-19-waking-early.rvertical.w330.jpg" alt="image" height="300" width="400"/>
      <h4>5 Reasons to wake up at 5am </h4>
      <p> People love waking up late. The truth is,</p>
      <p>so do I! But waking up early, very early,</p>
      <p>at like 5am...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://unisa.edu.au/siteassets/media-centre/images/heart-coffee---shutterstock_512503885_web.jpg" height="300" width="400"/>
      <h4>Coffee</h4>
      <p> Coffe is a sort of tea or drink which you can</p>
      <p>find anywhere. Caffeine is put in it, and because of this</p>
      <p> you stay awake...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://media.npr.org/assets/img/2020/07/10/gettyimages-1146368849_wide-75a5dd69a95547a45ba1d0177bdbe8ce1b076ef5.jpg" height="300" width="400"/>
       <h4>Kpop</h4>
      <p>Kpop is a huge industry these days. And when I say huge, I mean</p>
      <p>HUGE. It mostly appeals to teens, and many teens all over the  </p>
      <p>world are crazy fans...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>

<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/bc/41/5c/bc415c7c-a4f1-c814-1cc3-5ba20e6eedd0/mzl.ohhmfiir.jpg/643x0w.jpg" alt="image" height="300" width="400"/>
      <h4>Penzu </h4>
      <p> if you don't have a diary, or don't wanna buy one,</p>
      <p>what will you do? Hey hold on a minute!</p>
      <p>How about Penzu...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://www.australiaday.com.au/assets/Uploads/ADCNSW-NSW-Govt_SaltyDingo_9208.jpg" height="300" width="400"/>
      <h4>Sydney</h4>
      <p>Where do you live? Do you live in France or Italy? Russia </p>
      <p>or Britain? Have you ever thought about living in Australia?</p>
      <p> Why don't you live in Sydney? Yes, Sydney is literally the best place</p>
      <p> you could even imagine! It has many landmarks, and is a very </p>
      <p>diverse and multicultural...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://s.pinimg.com/images/facebook_share_image.png" height="300" width="500"/>
       <h4>Pinterest</h4>
      <p>Pinterest is a social media platform where many people all over the </p>
      <p>world post their own ideas so they can gain followers. Sign up and </p>
      <p>try it now! There are many creative ideas...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>

<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="image" height="300" width="400"/>
      <h4>Living in a house</h4>
      <p> I live in a unit, which is why I so badly want to live in a </p>
      <p>house. Yes, I have heard from friends that living in a house takes</p>
      <p>LOADS of cleaning and can be scary...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg" height="300" width="400"/>
      <h4>Water</h4>
      <p>Water. What an essential in daily life. Not only does </p>
      <p>water keep you healthy and living, but it</p>
      <p> also makes you beautiful! Water... </p>
      
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://m.media-amazon.com/images/I/81hVLOe8fwL.jpg" height="300" width="400"/>
       <h4>Lip Gloss</h4>
      <p> Lip gloss is one of the essential things in a girl's </p>
      <p>life. That is what I think. It is part of cosmetics and...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>

<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://i.pinimg.com/736x/91/92/b7/9192b729ea124a603210d9b0f2d16931.jpg" alt="image" height="400" width="400"/>
      <h4>Gharara</h4>
      <p> Ever worn Indian clothes? If you haven't, you would </p>
      <p>definitely want to try out a beautiful gharara first.</p>
      <p>A gharara looks like...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://assets.kogan.com/files/external/White_Label_Products/Kogan/KAOLED55X2SKA_1_0922.jpg?auto=webp&bg-color=fff&canvas=340%2C226&fit=bounds&height=226&quality=75&width=340" height="300" width="400"/>
      <h4>TV</h4>
      <p>Kogan TVs, I'd say, are the best. I have one </p>
      <p>and it is pretty large to be honest. It has </p>
      <p> lots of things... </p>
      
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQ15bYr48_s175jYGeXRAqlsitSdPfRp3BQ&usqp=CAU" height="300" width="400"/>
       <h4>Nail Polish</h4>
      <p> Nail Polish is one of privileges in a girl's </p>
      <p>life. That is what I think. It makes your nails</p>
      <p>looks super duper cute and pretty...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>

<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://www.hindustantimes.com/ht-img/img/2023/04/12/550x309/Oshi_No_KO_1681292283386_1681292295092_1681292295092.jpg" alt="image" height="300" width="400"/>
      <h4>Anime</h4>
      <p> Does this word ring a bell? You probably would have heard </p>
      <p>about anime since it is so popular, especially among</p>
      <p>teens. There are so many anime including... </p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://www.eslbuzz.com/wp-content/uploads/2017/10/2f5ef1cd97648db100221d05e9aad46f-cute-hairstyles-hairstyle-ideas.jpg" height="400" width="500"/>
      <h4>Hairstyles</h4>
      <p>I love hairstyles. Trying out new ones is one </p>
      <p>of my favourite hobbies actually. There are so </p>
      <p> many different haristyles for boys and...</p>
      
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://epicofficefurniture.com.au/wp-content/uploads/2015/08/Epic-Worker-2-fixed.jpg" height="300" width="400"/>
       <h4>Desk Drawers</h4>
      <p> As you can see in the image above, a desk drawer like that</p>
      <p>(or any desk drawer) can come in handy. Very handy indeed.</p>
      <p>If you want to be more...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>

<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://takeitpersonelly.com/wp-content/uploads/2019/12/7-important-things-to-consider-when-starting-a-business.jpg?w=723" alt="image" height="300" width="400"/>
      <h4>Opening a Business</h4>
      <p> Want to open a business? If you do, you are in luck to have  </p>
      <p>read this post. I will give you as much information as I can</p>
      <p>so you can succeed. First of all... </p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://www.realsimple.com/thmb/KrGb42aamhHKaMzWt1Om7U42QsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg" height="300" width="400"/>
      <h4>Books</h4>
      <p>There is so much technology in the world now. Every second </p>
      <p> you will see at least one person on their phone. </p>
      <p> But books haven't died down just yet...</p>
      
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/9129/production/_116516173_06_galaxys21_ultra_handson_spen_201230064723.jpg" height="300" width="400"/>
       <h4>Samsung Galaxy</h4>
      <p> Samsung Galaxy Phones are the absolute best! Yes,</p>
      <p>they have been around for a lot of time and also are coming out</p>
      <p>with totally new features...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>


<div className='card-group'>
  <div className='card'>
    <div className='card-body'>
      <img src="https://i.etsystatic.com/19789386/r/il/ad17d1/3041024788/il_fullxfull.3041024788_7cw9.jpg" alt="image" height="300" width="400"/>
      <h4>Curtains</h4>
      <p> Wanna make your house look good? A small minor thing like  </p>
      <p>curtains will look good in your house. There are many different </p>
      <p>shapes, sizes and colours... </p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://media.istockphoto.com/id/1183908655/photo/modern-living-room-interior-with-comfortable-sofa.jpg?s=612x612&w=0&k=20&c=hsn23YcqqFEtTSGH7xTfGLrTekPwaPNvBq-dluVqClg=" height="300" width="400"/>
      <h4>Decluttering</h4>
      <p> Decluttering my room and my house changed my life. It is</p>
      <p> actually so satisfying when you see your whole house so good- </p>
      <p> looking and neat...</p>
      
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
  <div className='card'>
    <div className='card-body'>
      <img src="https://t3.ftcdn.net/jpg/00/34/70/32/360_F_34703220_TiczZRk73LnvUcvt2J2qj57mKzwKAtBT.jpg" height="300" width="400"/>
       <h4>Stationery</h4>
      <p> What do you think of when you hear the word stationery?</p>
      <p>School supplies, am I right? But even if you are an adult,</p>
      <p>stationery or "work supplies" are...</p>
      <button type='button' className="btn btn-outline-primary">Read Full Article</button>
    </div>
  </div>
</div>

<div className="d-grid">
<button type="button" className='btn btn-dark'> <b> More Posts </b>  </button>
</div>
<br/>
        </>
    );
}
export default Myblog;