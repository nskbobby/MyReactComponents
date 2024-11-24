import React from "react";
import './AddNote.css';
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function AddNote({addNoteFunc}){

    const [formData,setFormData]= React.useState({content:'',heading:''});
    const [displayState, setDisplayState]= React.useState(false);

    const handleInput=(e)=>{
        const {name,value}=e.target;

        setFormData((prevData)=>({
            ...prevData,[name]:value,
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        addNoteFunc(formData);
        setFormData({heading:"",content:""});

    }

    const setdisplay=()=>{
        setDisplayState(true);
    }

    return(
<div
      style={{
        backgroundColor: "white", // Ensures the background is solid white
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        margin: "20px auto",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        maxWidth: "400px",
      }}
    >
      <form className="form-group" style={{ marginBottom: "0" }} onSubmit={handleSubmit}>
        <h3 style={{ fontFamily:'cursive', color: "#333" }}>
          Add a Note
        </h3>
        <TextField
          className="form-control"
          type="text"
          sx={{marginBottom:'10px'}}
          name="heading"
          value={formData.heading}
          onChange={handleInput}
          id="outlined-multiline-static"
          label="Enter Title"
          onClick={setdisplay}
          variant="standard"
        />
        {(displayState)&&
        <>
         <TextField
          className="form-control"
          onChange={handleInput}
        value={formData.content}
          type="text"
          multiline
          rows={4}
          name="content"
          placeholder="Enter content"
          variant="standard"
        />
                <Zoom in={displayState}>
        <Fab
          sx={{
            backgroundColor: "orange",
            margin: "0 auto",
            bottom:'-20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}
          type="submit"
        >
          <AddIcon sx={{
      margin: "0", 
      padding: "0",
      display: "block",
    }}/>
        </Fab>
        </Zoom>
        </>}
      </form>
    </div>
    );

}

export default AddNote;