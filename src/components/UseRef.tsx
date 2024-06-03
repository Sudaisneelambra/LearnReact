import { useRef } from "react"

function UseRef(){
    const inputref = useRef<HTMLInputElement | null>(null)
    const handle=()=>{
        if(inputref.current){
            inputref.current.focus()
        }
    }
    return <>
    <input type="text" ref={inputref} name="" id="" />
    <button className="btn btn-danger" onClick={handle}>Click me</button>
    </>
}

export default UseRef