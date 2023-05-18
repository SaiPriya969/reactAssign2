import { useState } from 'react';
import './App.css';
import RegistrationPage from './RegistrationPage';
import {LoginForm} from './loginPage';
import StatusComponent from './StatusComponent';
import Land from './Landing2';
import { Landing } from './Landing';

function App() {
  const [ existingUsersArr, setExistingUsersArr ] = useState([])
  const [pageState,setPage] = useState(-1)
  
  const [status, setStatus] = useState(false)
  const [showStatus, setShowStatus]=useState(false)
  function register (data){
    const ar=[...existingUsersArr, data]
    setExistingUsersArr(ar)
    console.log(existingUsersArr);
    console.log(status,'status')
  }
return (
  <div className="App">
   {/* <div><button onClick={() => {setPage(1)}}> Login</button></div>
   <div>new user?</div>
   <div><button onClick={() => {setPage(0)}}>Register</button></div>
   {  pageState===0 ?  <RegistrationPage register={register} /> : <div> </div> }
   {  pageState===1 ?  <LoginForm existingUsersArr= {existingUsersArr} setStatus={setStatus}  setShowStatus={ setShowStatus} status={status} setpage={setPage} /> : <div> </div> }
   { showStatus ? <StatusComponent  status={status}/>  : <div></div>} 
   */}
   {/* {
    <div>
      <button>Login</button>
    </div>
   }
   <div>New User?</div>
   <div>
      <button>Register</button>
   </div>
    */}
    <Landing></Landing>
  </div>
)
}

export default App;
