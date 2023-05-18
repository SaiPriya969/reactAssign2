import React from 'react'
import { useState } from 'react'
import {Landing} from './Landing'
export  const LoginForm = ({existingUsersArr, setStatus, setShowStatus,status, setpage}) => {
  const [pageState,setPage] = useState(1)
  const [loginData, setLoginData]=useState({
    userName:'',
    password:'',
  })
  const checkData=(x)=>{
    console.log(status)
    setShowStatus(true)
    setPage(-1)
    
    for(let i=0; i<existingUsersArr.length;i++){
      if(existingUsersArr[i].userName===x.userName && existingUsersArr[i].password===x.password ){
        console.log('Success');
        setStatus(true) 
        break;
      }
      else{
        console.log('fail')
        setStatus(false)
      }
    }
  }
  return (
    <>
   { pageState===1 && <div className='form'>
      LoginForm
      <div>User Name:<input type="text" onChange={(e)=>{setLoginData({...loginData,  userName:e.target.value})}}></input></div>
      <div>Password:<input type="text" onChange={(e)=>{setLoginData({...loginData, password:e.target.value})}}></input></div>
      
      <div><button onClick={()=>checkData(loginData)}>Login</button></div>
      {/* <div>
        <button onClick={()=>setPage(2)}>landing</button>
      </div> */}
     
    
    </div>
   }
   </>
  )
}

// export default  LoginForm;