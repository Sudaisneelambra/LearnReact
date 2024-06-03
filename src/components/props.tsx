import PropsChild from "./PropsChild";

interface Props{
    name?:string;
}

function Props({name}:Props){
    return <>
        <h1>{name} is the Good Boy</h1>
        <PropsChild name={name}/>
    </>
}

export default Props