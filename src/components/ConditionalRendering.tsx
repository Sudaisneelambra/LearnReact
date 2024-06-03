import { useState } from "react"

function ConditionalRendering(){

    const [state, setState] = useState(false)

    return <>
        {state ? <button onClick={()=>setState(!state)}>LogOut</button> :<button onClick={()=>setState(!state)}>Login</button>}
        {state && <h1>Welcome The user</h1>}
    </>
}

export default ConditionalRendering