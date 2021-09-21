import React, {useState, useEffect} from "react";
import './App.css';

export default function ToDo(){
  const [todos, settodos] = useState([]);  
  const [todo, settodo] = useState("") ;  
  const [currentToDo, setcurrentToDo] = useState(null);
    
  useEffect(()=>{
    console.log("Mounting");
    },[])

    useEffect(()=>{
      console.log("Update");
    })

    useEffect(()=>{
      return()=>{
      console.log("unmount");
      }
    })
    
  const handleToDo = (value)=>{ 
    settodo({ todo: value });
  }

  const addToDo = ()=> {
    if(todo!==""){    
    const todos = [...todos];
    todos.push(todo);
    settodos({todos: todos, todo:""});
    }
  };

  const editToDo = index =>{
    settodo({todo:todos[index]});
    setcurrentToDo({currentToDo : index});
  }

  const updateToDo = (currentToDo) => {
      const todos = [...todos];
      todos[currentToDo] = todo;
      this.settodos({todos:todos, todo:"", currentToDo:null});
  }

  const deleteToDo = index => {
    const todos = [...todos];     
      todos.splice(index, 1);
      this.settodos({todos: todos});      
    }     

    return(
      <div>
        <input type="text" value={todo} onChange={e => handleToDo(e.target.value)}
        />
        {!currentToDo ? (
        <button onClick = {addToDo}>Add</button>) : (
        <button onClick={updateToDo(currentToDo)}>Update</button>
        )}
        
        {todos.map((todo,index)=>{
          return(            
          <p key ={index}>{todo}
          <button onClick={()=> editToDo(index)}>Edit</button>                 
          <button onClick={()=>deleteToDo(index)}>Delete</button>
          </p>
          );
  })}
          </div> 
    );
}
      
