
interface Props{
    children:string;
    onClose:()=>void
}

function Alert({children,onClose}:Props){
    return(<>
        <div className="alert alert-primary alert-dismissible">Sudai anu neelamra {children} <button className="btn-close" onClick={onClose}></button></div>
        </>
    )
}

export default Alert