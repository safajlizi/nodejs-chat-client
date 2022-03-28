import  React,{useContext}  from 'react';
import {UserContext} from '../../UserContext'
import {Link} from 'react-router-dom'
import RoomList from './RoomList'

const Home=()=>{
    const {user,setUser}=useContext(UserContext)
    const [room,setRoom]=useState('')
     const    handleSubmit=(e)=>{
            e.preventDefault();

     }
    const rooms=[{

       name:'room1',
       _id:'123'
    },
    {
        name:'room2',
        _id:'456'
     }]
     
    const setAsJohn=()=>{
        const john={
            name:'john',
            email:'john@email.com',
            password:'123',
            id:'123'
        }
        setUser(john)
    }
    const setAsTom=()=>{
        const john={
            name:'tom',
            email:'tom@email.com',
            password:'456',
            id:'456'
        }
        setUser(john)
    }
    return(
        
     <div className="row">
          <div className="col s12 m6">
               <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                       <span className="card-title">Welcome {user ? user.name:''}</span>
                      <div class="row">
                       <form  onSubmit={handleSubmit} >
 
    
                        <div className="row">
                           <div className="input-field col s12">
                              <input  id="room" type="text"
                              placeholder='Enter a room name'
                              className="validate"
                              value={room}
                              onChange={e=>setRoom(e.target.value)}
                              />
                             <label htmlFor="room">Room   </label>
                          </div>
                       </div>
                      <button className="btn">Create Room </button>
  
                </form> 
  
                   
                   </div>
                   <div className="card-action">
                             <a href="#" onClick={setAsJohn}>Set as Johon</a>
                             <a href="#"onClick={setAsTom}>Set as Tom  </a>
                   </div>
                </div>
          </div>
       <div className="col s6 m5 offset-1">
           <RoomList rooms={rooms}/>

       </div>
     </div>
    <Link  to='/chat '>  
                     <button>go to chat</button>
    </Link>
        </div>
        
    )
}
export default Home