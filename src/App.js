import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initialItems=[];
  if(localStorage.getItem("items")===null){
    initialItems = [];
  }
  else {
    initialItems = JSON.parse(localStorage.getItem("items"));
  }
  const onDelete = (item)=>{
    // console.log( "i am OD",item);
    setitems(items.filter((e)=>{
      return e!==item;
    }))
    localStorage.setItem("items",JSON.stringify(items));
  }
  let addTodo = (title,desc)=>{
    // console.log(title,desc);
    let sno;
    if(items.length===0) sno = 1;
    else sno = items[items.length-1].sn+1;

    const mytodo = {
      sn : sno,
      title: title,
      desc: desc
    }
    console.log(mytodo);
    setitems([...items,mytodo]);
  }
  const [items,setitems] = useState(initialItems)
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
  },[items]);

  return (
    <>
    <Router>
      <Header title="My todos list" searchbar={true}/>
      <Routes>
          <Route exact path="/about" Component={About}>
          </Route>
          <Route exact path="/" Component = {()=>{
            return (
              <>
                <AddTodo addTodo = {addTodo}/>
                <Todos items = {items} onDelete = {onDelete}/>
              </>
            )
          }}>
          </Route>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;