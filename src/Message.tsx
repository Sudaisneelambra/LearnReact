// Pascal Casing
function Message(){

    const name = 'Sudais'

    // JSX javaScript XML
    // return <h1>Hellow World</h1>

    if(name){

        return <div className="">
            <h1>Hellow {name}</h1> 
            <img src="/src/assets/react.svg" alt="" />
        </div>
    } else {
        return <h1>Hellow World</h1>
    }
}

export default Message;