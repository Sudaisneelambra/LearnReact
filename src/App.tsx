// import ListGroup from './components/ListGroup';
// import Alert from './components/Alert'
// import Button from './components/Button';
// import './App.css'
// import { useState } from 'react';



// function App(){

//   // const Clicking=()=>{
//   //   console.log('sunnani');
//   // }

//   const [state, setState] =useState(false)

//   const items = ['banana', 'orange', 'apple','mango']
//   const handle = (item:string)=> console.log(item)
//   return <>
//   <div className="main"><ListGroup items={items} heading='fruits' onselectItem ={handle}/></div>
//   {state && <Alert onClose={()=> setState(false)}>Koorad</Alert>}

//   <Button color='danger' name='Click ME' onClick={()=>{setState(true)}} />
//   </>
// }



// import UseStates from "./components/UseStates";
// import UseEffectHook from "./components/UseEffectHook";
// import UseRef from "./components/UseRef";
// import ThemeButton from "./components/ThemeButton";
// import ConditionalRendering from "./components/ConditionalRendering";
import ListAndKey from "./components/ListAndKey";
// import ApiIntegration from "./components/ApiIntegration";

import Props from "./components/props";
import EventHandling from "./components/EventHandling";
// import { useState } from "react";
import {BrowserRouter as Router , Routes, Route ,Link} from "react-router-dom";
import Dashboard from "./components/DashBoard";
import Login from "./components/Login";

function App(){

  // const [current, setCurrent] = useState('Click me')

  return <>
        {/* <Props name="Sudais"/> */}
        {/* <EventHandling buttonValue={current} clicking={()=>{current==='Click me'? setCurrent('clicked') : setCurrent('Click me')}
        }/> */}
        {/* <UseStates/> */}
        {/* <UseEffectHook/> */}
        {/* <UseRef/> */}
        {/* <ThemeButton/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListAndKey/> */}
        {/* <ApiIntegration/> */}
        
        <Router>
          <div className="">
            <nav>
              <ul>
                <Link to="/"><li>Event Handle</li></Link>
                <Link to= "/props">Props</Link>
                <Link to= "listandkey"><li>list and key</li></Link>
                <Link to= "dashboard"><li>Dashboard</li></Link>
                <Link to= "login"><li>Login</li></Link>
              </ul>
            </nav>
            <Routes>
                <Route path="/" Component={EventHandling}/>
                <Route path="/props" Component={Props}/>
                <Route path="/listandkey" Component={ListAndKey}/>
                <Route path="/dashboard" Component={Dashboard}/>
                <Route path="/login" Component={Login}/>
              
            </Routes>
          </div>
        </Router>
        
  </>
}
export default App;