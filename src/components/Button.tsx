
interface Props{
    name:string;
    color?:string;
    onClick:()=>void
}


function Button ({name, color,onClick}:Props){
    return<>
    <button className={`btn btn-${color}`} onClick={onClick}>{name}</button>
    </>
}

export default Button;