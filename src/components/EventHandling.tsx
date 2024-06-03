interface Props{
    buttonValue?:string;
    clicking?:()=>void
}

function EventHandling({buttonValue,clicking}:Props){
    return <>
        <button className="btn btn-primary" onClick={clicking}>{buttonValue}</button>
    </>
}

export default EventHandling