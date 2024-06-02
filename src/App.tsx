import ListGroup from './components/ListGroup';
import './App.css'



function App(){

  const items = ['banana', 'orange', 'apple','mango']
  const handle = (item:string)=> console.log(item)
  return <div className="main"><ListGroup items={items} heading='fruits' onselectItem ={handle}/></div>
}

export default App;