import React from "react";
import './TextTile.css';
import DeleteIcon from '@mui/icons-material/Delete';

function TextTile({tile,deleteFunc}){

    return(
    <div className="textTile  rounded text-break">
    <form className="contentTile" action="/contenttile" method="POST">
    <h4  name='tileHeading'>
    {tile.heading}
    </h4>
    <h5  name='tileContent'>{tile.content}</h5>
    <button style={{all:'unset'}} type="button" onClick={deleteFunc} ><DeleteIcon fontSize="small" color="action" /></button>
     </form></div>
    );
    
    
    }

    export default TextTile