import React from 'react';
import './App.css';
import  Heading from './components/Heading';
import DayNightTheme from './components/DayNightTheme';
import Form, {CreateAccountForm} from './components/Form';
import Navbar from './components/Navbar';
import TextTile from './components/TextTile';
import Copyright from './components/Copyright';
import Contactcard from './components/ContactCard';
import Counter from './components/Counter';
import Clock from './components/Clock';
import GreetingInput from './components/GreetingInput';
import ToDoList from './components/ToDoList';
import ListMap from './components/ListMap';
import { Alert } from '@mui/material';
import AddNote from './components/AddNote';


function App() {

const randomItem=[{
  id:1,
  data:"i am random"
},
{
  id:2,
  data:"i am random 2"
}]


function deleteitem(index){
  console.log("index of "+index);
   randomItem.filter((item)=>{
    return item.id!=1;
   })
}

const tilecontent=[
  {
    id:1,
    heading:'first tile', 
    content:'This is some content'
  },
  {
    id:2,
    heading:'two tile', 
    content:'This is some content'
  },
  {
    id:3,
    heading:'three tile', 
    content:'This is some content'
  },
  {
    id:4,
    heading:'four tile', 
    content:'This is some content'
  },
  {
    id:5,
    heading:'five tile', 
    content:'This is some content'
  },
  {
    id:6,
    heading:'six tile', 
    content:'This is some content'
  },
  {
    id:7,
    heading:'seven tile', 
    content:'This is some content. i am lengthy congent of this tile and i am checkihg to see if i will be expanded when i have a lot of text inside me as i want to be my tile to be dynamic to expand and compress when in type'
  },
]

const [tiles, setTiles] = React.useState(tilecontent);

// Function to delete a tile by ID
const deleteTile = (id) => {
  setTiles((prevTiles) => prevTiles.filter((tile) => tile.id !== id));
};

const addNote = (note) => {
  const lengthTileContent=tilecontent.length;
  setTiles((prevContent) => [
    ...prevContent,
    {
      id: prevContent.length,
      heading: note.heading,
      content: note.content,
    },
  ]);
  console.log("Note added:", note); // Replace this with your actual logic
};

const showTiles=true;
const showAnd=true;



  return (
    <div className='d-flex flex-column min-vh-100'>
    <div className=' main flex-grow-1'>
    {/*<Heading message=' Krishna' year='2024' />
    <DayNightTheme />*/}
    <Navbar logoName='Mycomponents' />
    <div className='d-flex flex-wrap gap-4 px-2'>
      <div className='container'>
      <AddNote addNoteFunc={addNote} />
      </div>
      <div className='d-flex flex-wrap'>
    {showTiles?( tiles.map(x=>(<TextTile key={x.id} tile={x} deleteFunc={()=>deleteTile(x.id)} />))) :(<h1>Tiles hidden by terinary</h1>)}
    </div>
    {showAnd&&<h4>I am true for &&</h4>}
    <Contactcard 
    profileName="IronMan" 
    tel='900113344' 
    email='ironman@gmail.com' 
    img='data:image/jpeg;base64,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'
    />
    <Form actionRoute='/' formText="this is form message" />
    <CreateAccountForm formText= 'password must contain a capital letter,special character & number' />
    <Counter />
    <Clock id='clock'/>
    <GreetingInput />
    <ToDoList />
    <ListMap listItems={randomItem} deleteFunction={deleteitem}/>
    <Alert severity="warning" variant="filled" sx={{position:'relative', maxHeight:'60px'}} > This is an MUI alert </Alert>
    </div>
    </div>
    <div className='d-flex justify-content-center'>
    <Copyright 
    legalName='Krishna' 
    className='justify-content-center' 
    />
    </div>
    </div>
  );
}

export default App;
