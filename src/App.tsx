import ListGroup from './components/ListGroup';
import Alert from './components/Alert'
import Button from './components/Button';
import './App.css'
import { useState } from 'react';



function App(){

  const Clicking=()=>{
    console.log('sunnani');
  }

  const [state, setState] =useState(false)

  const items = ['banana', 'orange', 'apple','mango']
  const handle = (item:string)=> console.log(item)
  return <>
  <div className="main"><ListGroup items={items} heading='fruits' onselectItem ={handle}/></div>
  {state && <Alert onClose={()=> setState(false)}>Koorad</Alert>}

  <Button color='danger' name='Click ME' onClick={()=>{setState(true)}} />
  </>
}

export default App;