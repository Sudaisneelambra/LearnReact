
import {  useState } from "react";
import PropsChild from "./PropsChild";
// import { useLocation, useParams } from "react-router-dom";
interface Props{
    name?:string;
}



function Props({name}:Props){
    
    // const location = useLocation();
    // const params = useParams();

    const [names, setName] = useState('anuz')
    return <>
        <h1>{ names} is the Good Boy</h1>
        {/* <p>Current Location: {location.pathname}</p> */}
        {/* <p>Route Parameters: {JSON.stringify(params)}</p> */}
        <PropsChild name={name}/>
        <button className="btn btn-primary" onClick={()=>setName('sinu')}> ones</button>
    </>
}

export default Props