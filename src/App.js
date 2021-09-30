import React, { useState } from "react";
import "./App.css";
import { TodoItem } from "./todo-item";

export const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [inputVisibility, setInputVisibility] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(1);

//   console.log(`todoArray`, todoArray);

  const openInputForAdding = () => {
    setInputVisibility(!inputVisibility);
  };

  const submitValues = () => {
    if (inputValue) {
      setCount(count + 1);
      const newItem = {
        id: count,
        text: inputValue,
      };
      setTodoArray([...todoArray, newItem]);
    }
  };

  let customInput = null;
  if (inputVisibility)
    customInput = (
      <>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='input value'
        />
        <button onClick={submitValues}>Submit</button>
      </>
    );

  return (
    <div className='App'>
      {todoArray && todoArray.map((item) => {
            return (
               <TodoItem
                  key={item.id}
                  item={item}
                  todoArray={todoArray}
                  setTodoArray={setTodoArray}
               />
            );
         })}
      <button onClick={openInputForAdding}>Add New Item</button>

      <div>{customInput}</div>
    </div>
  );
};
