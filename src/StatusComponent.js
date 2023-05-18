import React from 'react'
import { useState } from 'react'
import {Landing} from './Landing.js'
const StatusComponent = (status,setpage) => {
const [statusPage,setStatusPage]=useState(1)
const onclick=()=>{
  setStatusPage(-1)
  setpage(-1)

}
  return (
    <>
    {statusPage===1 &&
    <div>    
        status:
        <div>{ status.status ? <div>success</div> : <div>Fail</div> }</div>
        <button onClick={()=>onclick()}>landing</button>
      
    </div>
    }
    </>
  )
}

export default StatusComponent