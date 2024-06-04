interface Props{
    buttonValue?:string;
    clicking?:()=>void
}

function EventHandling({buttonValue,clicking}:Props){
    return <>
        <button className="btn btn-primary" onClick={clicking}>{buttonValue || 'anuz'}</button>
    </>
}

export default EventHandling