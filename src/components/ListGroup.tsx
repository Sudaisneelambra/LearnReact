// import {Fragment} from'react'
function ListGroup() {
  let items = ["apple", "orange", "grapes", "tomatto"];
  items = [];

  const condition = items.length === 0 ? <p>Not Found</p> : null
  
  const getItem = ()=>{
    return items.length === 0 ? <p>Not Found In Function</p> : null
  }

  return (
    <>
      <h1>List Of Items</h1>
      <>
        <h3>Item</h3>
        {/* method One */}
        {condition}

        {/* method two */}
        {items.length === 0 ? <p>No item Found</p> : null}  

        {/* method 3 */}
        {items.length ===0 && <p>NO ITEMS</p>}

        {/* third method */}
        {getItem()}
      </>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
