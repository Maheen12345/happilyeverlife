import React,{useState} from "react";
function Hooks()
{
const state=useState();
const[count,setcount]=useState(0);
function Motion()
{
    setcount(count+1);
};
 return(
<>
     <div className="text-center text-danger">
        <h1 className="display-1">{count}</h1>
        <button type="button" className="btn btn-warning btn-lg" onClick={Motion}>Click Here</button>
     </div>


</>



    );
}
export default Hooks;