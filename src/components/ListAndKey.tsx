function ListAndKey(){
    const item =['apple', 'mango','orange']
    const items =[
        {id:1,name:'sudais'},
        {id:2,name:'anu'},
        {id:3,name:'minu'},
        {id:4,name:'manu'},
        {id:5,name:'sinu'},
    ]
    return <>
    <ul>
        {item.map((item)=> (<li key={item}>{item}</li>))}
    </ul>

    <ul>
        {items.map((it)=>(<li key={it.id}>{it.name}</li>))}
    </ul>
    </>
}

export default ListAndKey