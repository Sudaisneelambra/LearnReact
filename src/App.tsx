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
// import ListAndKey from "./components/ListAndKey";
// import ApiIntegration from "./components/ApiIntegration";

import React, { useState } from "react";
// import Props from "./components/props";
// import EventHandling from "./components/EventHandling";
// import { useState } from "react";
// import {BrowserRouter as Router , Routes, Route ,Link} from "react-router-dom";
// import Dashboard from "./components/DashBoard";
// import Login from "./components/Login";

// const MyContext =React.createContext<string|undefined>(undefined)
// function App(){


  // const [current, setCurrent] = useState('Click me')

  // const name='chinnus'
  // return <>
      {/* <MyContext.Provider value={name}>
        <Props name="Sudais"/>
      </MyContext.Provider>   */}
        {/* <EventHandling buttonValue={current} clicking={()=>{current==='Click me'? setCurrent('clicked') : setCurrent('Click me')}
        }/> */}
        {/* <UseStates/> */}
        {/* <UseEffectHook/> */}
        {/* <UseRef/> */}
        {/* <ThemeButton/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListAndKey/> */}
        {/* <ApiIntegration/> */}
        
        {/* <Router>
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
        </Router> */}

    
        
  // </>
// }
// export default App;

// export { MyContext };

import { useMemo } from "react";

function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(()=> expensiveCalculation(count),[count])

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}


export default App