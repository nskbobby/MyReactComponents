import React from "react";
import './ListMap.css';


function ListMap({listItems,deleteFunction}){


    return(
        <div>

    {            listItems.map((item,index)=>(
 <ul
 key={index}
 className="d-flex align-items-center justify-content-between py-2 ">

 <li><p className="mb-0" onClick={()=>deleteFunction(index)} style={{fontFamily:'cursive',wordBreak:'break-word', overflowWrap:'break-word', whiteSpace:'pre-wrap'}}>{item.data}</p></li>
</ul>
    ))}
        </div>
    );
}

export default ListMap