import { useState } from "react";

interface Props{
    items:string[];
    heading:string;
    onselectItem:(item:string)=>void;
}

// import {Fragment} from'react'
function ListGroup({items, heading , onselectItem }:Props) {
  
  //   items = [];

  const condition = items.length === 0 ? <p>Not Found</p> : null;

  const getItem = () => {
    return items.length === 0 ? <p>Not Found In Function</p> : null;
  };

//   const handleClick = () => console.log('clicked');
//   let selectedItem =0

  const [selectedItem, setman] =useState(-1)

  return (
    <>
      <h1>List Of Items</h1>
      
        <h3>{heading}</h3>
        {/* method One */}
        {condition}

        {/* method two */}
        {items.length === 0 ? <p>No item Found</p> : null}

        {/* method 3 */}
        {items.length === 0 && <p>NO ITEMS</p>}

        {/*  method 4 */}
        {getItem()}
        
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedItem === index ? "list-group-item active" : "list-group-item"}
            onClick={()=> {setman(index); onselectItem(item);}}
            
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
