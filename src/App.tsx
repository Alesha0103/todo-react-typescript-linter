import React, { useState } from 'react';
import './App.css';
import { TodoItem } from './todo-item';

import { ItemType } from './types';

export const App: React.FC = () => {
  const [todoArray, setTodoArray] = useState<ItemType[]>([]);
  const [inputVisibility, setInputVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(1);

  const openInputForAdding = (): void => {
    if (!inputVisibility) {
      setInputValue('');
    }
    setInputVisibility(!inputVisibility);
  };

  const submitValues = async (): Promise<void> => {
    if (inputValue) {
      setCount(count + 1);
      const newItem: ItemType = {
        id: count,
        text: inputValue,
      };
      await setTodoArray([...todoArray, newItem]);
      setInputValue('');
    }
  };

  let customInput = null;
  if (inputVisibility) {
    customInput = (
      <>
        <input
          value={inputValue}
          onChange={(e): void => setInputValue(e.target.value)}
          placeholder="input value"
        />
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
