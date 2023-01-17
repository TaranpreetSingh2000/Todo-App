import Header from './Components/Header';  // import
import Footer from './Components/Footer';
import Todos from './Components/Todos';
//import TodoItem from './Components/TodoItem';
import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {

  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"))

  }


  const onDelete = (todo) => {
    console.log("I an ondelete of todo", todo)
    //  let index=todos.indexOf(todo);   deleeting this way not work
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
    console.log("deleted",todos);
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }

    const myTodo = {     // make a todo
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);



  }

  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])    // when my todos change then i have to run my arrow function

  return (
    <>
      <Router>
        <Header title="My Todos List" searchbar={true} />{/** Initially set to false for searchbar */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
           <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
           )
          }}>

          </Route>
          <Route exact path="/about">
          <About />
          </Route>

        </Switch>

        {/** pass todos as a object from above array */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
