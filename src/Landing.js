import { useState } from 'react';
import './App.css';
import RegForm from './RegistrationPage';
import {LoginForm} from './loginPage';
import StatusComponent from './StatusComponent';
import Land from './Landing2.js';
export const Landing=() =>{
    const [ existingUsersArr, setExistingUsersArr ] = useState([])
    const [pageState,setPage] = useState(-1)
    const [status, setStatus] = useState(false)
    const [showStatus, setShowStatus]=useState(false)
    function register (data){
      // let ar=[...existingUsersArr, data]
      setExistingUsersArr([...existingUsersArr, data])
      console.log(existingUsersArr);
      console.log(status,'status')
      console.log(pageState);
    }
  return (
    <div className="App">
     {pageState===-1 && <Land sp={setPage} ></Land>}
     {  pageState===0 && <RegForm register={register}  existingUsersArr={ existingUsersArr} setExistingUsersArr={setExistingUsersArr}  />  }
     {  pageState===1 ?  <LoginForm existingUsersArr= {existingUsersArr} setStatus={setStatus}  setShowStatus={ setShowStatus} status={status} setpage={setPage} /> : <div> </div> }
     { showStatus ? <StatusComponent  status={status} setpage={setPage}/>  : <div></div>} 
    <div>{existingUsersArr}</div>
     
    </div>
  )
}

