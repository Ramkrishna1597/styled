import {Button} from './components/Button';
import './App.css';
import {useEffect, useState} from 'react'


function App() {

  const [theme, setTheme] = useState("dark")
  return (
    <div className="App"  theme = {theme}>
     
      <h3>count:0</h3>
      <h3>theme is {theme}</h3>
      
      <Button 
       theme = {theme} onClick ={()=>{
        alert("clicked click me")
      }}>click me</Button>

      <Button onClick ={()=>{
        alert("clicked sign me")
      }}>sign in</Button>

      <Button>login</Button>
      <br></br>
      <Button  
        onClick = {() =>{
         
          setTheme(theme === "light" ? "dark" : "light")
        }}
        >change theme</Button>
    </div>
  );
}

export default App;
