import React, { useState, useRef } from 'react';

import { InputForEdit } from './input-for-edit';
import { TodoItemsType, ItemType } from './types';

export const TodoItem: React.FC<TodoItemsType> = (props) => {
  const { item, todoArray, setTodoArray } = props;

  const [inputVisibility, setInputVisibility] = useState(false);

  const inputForEditRef = useRef<HTMLInputElement>(null);

  const openInputForEdit = (): void => {
    setInputVisibility(true);
  };

  const deleteItem = (el: ItemType) => (): void => {
    const elementIndex = todoArray.indexOf(el);
    setTodoArray([
      ...todoArray.slice(0, elementIndex),
      ...todoArray.slice(elementIndex + 1),
    ]);
  };

  const editItem = (el: ItemType) => (): void => {
    if (inputForEditRef.current?.value) {
      const foundElement = todoArray.find((obj) => obj.id === el.id);
      if (foundElement) {
        foundElement.text = inputForEditRef.current.value;
      }
    }
    setInputVisibility(false);
  };

  let buttonForEdit = null;
  if (!inputVisibility) {
    buttonForEdit = (
      <button onClick={openInputForEdit} type="submit">
        edit
      </button>
    );
  }
  if (inputVisibility) {
    buttonForEdit = (
      <button onClick={editItem(item)} type="submit">
        edit done
      </button>
    );
  }

  return (
    <div className="list-item">
      <span>{item.text}</span>
      {buttonForEdit}
      <button onClick={deleteItem(item)} type="submit">
        delete
      </button>
      {inputVisibility && <InputForEdit inputForEditRef={inputForEditRef} />}
    </div>
  );
};
