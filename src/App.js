import './App.css';
import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import { UserContext} from'./UserContext'
import Chat from'./components/chat/chat';
import Home from'./components/home/home';
import Navbar from'./components/layout/Navbar';





//switch walat routes
function App() {
  const[user,setUser]=useState(null)
  return ( 
     <Router>
       <div  className="App">
         
          <UserContext.Provider value={{user,setUser}}>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}  />
  <Route  path="/chat" element={<Chat/>}  />
            </Routes>
          </UserContext.Provider>
        </div>
    </Router>
    
  );
}

export default App;
