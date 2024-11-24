import React, { useState } from "react";
import './ToDoList.css'

function ToDoList(){

    const [toDoItems,SettoDoItems]=useState({
        toDoItems:[],
        inputValue:'',
    });


function handleInputChange(event){
const {value}=event.target;
SettoDoItems((prevState)=>({
...prevState,
inputValue:value,
}));
}

function addData(){
    if(toDoItems.inputValue.trim()==="") return;

    SettoDoItems((prevState)=>({
        toDoItems:[...prevState.toDoItems,prevState.inputValue.trim()],
        inputValue:"",
        }));
}

return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", backgroundColor:'orange', borderRadius:'30px' }}>
        <h2 className="text-center mb-4" style={{fontFamily:'cursive'}}>To-Do List</h2>

        {/* Input Section */}
        <div className="d-flex mb-3">
            <input
                type="text"
                placeholder="Enter a new task"
                value={toDoItems.inputValue}
                onChange={handleInputChange}
                className="form-control me-2 text-wrap over"
                style={{ flex: 1, wordWrap:'break-word', whiteSpace:'pre-wrap', overflowWrap:'break-word' }}
            />
            <button
                className="btn btn-success"
                type="submit"
                onClick={addData}
            >
                Add
            </button>
        </div>

        {/* To-Do Items */}
        <div className="bg- p-3 rounded shadow-sm">
            {toDoItems.toDoItems.length > 0 ? (
                toDoItems.toDoItems.map((item, index) => (
                    <ul
                        key={index}
                        className="d-flex align-items-center justify-content-between py-2 "
                    >
                        <li><p className="mb-0" style={{fontFamily:'cursive',wordBreak:'break-word', overflowWrap:'break-word', whiteSpace:'pre-wrap'}}>{item}</p></li>
                    </ul>
                ))
            ) : (
                <p className="text-muted text-center" style={{ontFamily:'cursive',wordBreak:'break-word', overflowWrap:'break-word', whiteSpace:'pre-wrap'}}>No tasks yet. Start adding some!</p>
            )}
        </div>
    </div>
);


}

export default ToDoList;