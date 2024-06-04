import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

function ApiIntegration(){

    const [state, setState] = useState<UserData[]>([]); // Specify the type of state as UserData[]
    const [name, setName] = useState('anu')

    useEffect(()=>{
        axios.get<UserData[]>('https://jsonplaceholder.org/users') // Specify the expected response data type
        .then((res)=>{
            console.log(res.data);            
            setState(res?.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return (
        <>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {state.map((e) => (
                    <tr key={e.id}>
                        <td>{e.firstname}</td>
                        <td>{e.lastname}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h1>{name}</h1>
        <button className="btn btn-primary" onClick={()=>setName('minu')}>click Me</button>
        </>
        
    );
}

export default ApiIntegration;
