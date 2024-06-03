import { useState } from "react";

function UseStates(){
    const [state, setState] = useState(0);

    const Increment =()=>{
        setState(state+1)
    }

    const Decrement =()=>{
        setState(state-1)
    }

    return <>
    <h1>{state}</h1>
    <button className="btn btn-danger me-2 ms-2" onClick={Increment}>Increment</button>
    <button className="btn btn-danger" onClick={Decrement}>Decrement</button>

    </>
}

export default UseStates;