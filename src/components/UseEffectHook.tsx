import { useEffect, useState } from "react"

function UseEffectHook(){
    const [times, setTimes] = useState(0)

    useEffect(()=>{
        console.log(`You clicked ${times} times`);
        
    })

    return <>
    <h1>you {times} Times clicked here</h1>
    <button className=" btn btn-primary" onClick={()=>setTimes(times+1)}>Click</button>
    </>
}

export default UseEffectHook