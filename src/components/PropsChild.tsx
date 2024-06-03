interface Props {
    name?:string
}
function PropsChild({name} :Props){
    return <>
        <h1>{name} from the grand parend</h1>
    </>
}

export default PropsChild