import React, { useState, useRef } from 'react';
import './App.css';
import { TodoItem } from './todo-item';

import { ItemType } from './types';

export const App: React.FC = () => {
  const [todoArray, setTodoArray] = useState<ItemType[]>([]);
  const [inputVisibility, setInputVisibility] = useState(false);
  const [count, setCount] = useState(1);

  const inputRef = useRef<HTMLInputElement>(null);

  const openInputForAdding = (): void => {
    if (!inputVisibility && inputRef.current) {
      inputRef.current.value = '';
    }
    setInputVisibility(!inputVisibility);
  };

  const submitValues = (): void => {
    if (inputRef.current?.value) {
      setCount(count + 1);
      const newItem: ItemType = {
        id: count,
        text: inputRef.current?.value,
      };
      setTodoArray([...todoArray, newItem]);
      inputRef.current.value = '';
    }
  };

  let customInput = null;
  if (inputVisibility) {
    customInput = (
      <>
        <input ref={inputRef} placeholder="input value" />
        <button onClick={submitValues} type="submit">
          Submit
        </button>
      </>
    );
  }

  return (
    <div className="App">
      {todoArray
        && todoArray.map((item: ItemType) => (
          <TodoItem
            key={item.id}
            item={item}
            todoArray={todoArray}
            setTodoArray={setTodoArray}
          />
        ))}
      <button onClick={openInputForAdding} type="submit">
        Add New Item
      </button>

      <div>{customInput}</div>
    </div>
  );
};
