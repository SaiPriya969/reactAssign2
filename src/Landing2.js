import React from 'react'
const Land=({sp})=>{
return(
    <div>
        <div><button onClick={()=>{sp(1)}}> Login</button></div>
        <div>new user?</div>
        <div><button onClick={()=>sp(0)}>Register</button></div>
    </div>
)
}
export default Land;