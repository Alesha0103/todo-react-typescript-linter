import React, { useState } from "react";

import { InputForEdit } from "./input-for-edit";

export const TodoItem = (props) => {
  const { item, todoArray, setTodoArray } = props;

  const [inputVisibility, setInputVisibility] = useState(false);
  const [editedValue, setEditedValue] = useState("");

  const openInputForEdit = () => {
    setInputVisibility(true);
  };

  const deleteItem = (el) => () => {
    const elementIndex = todoArray.indexOf(el);
    setTodoArray([
       ...todoArray.slice(0, elementIndex),
       ...todoArray.slice(elementIndex + 1)
      ]);
  };

  const editItem = (el) => () => {
    if (editedValue) {
      const foundElement = todoArray.find((obj) => obj.id === el.id);
      foundElement.text = editedValue;
    }
    setInputVisibility(false);
  };

  let buttonForEdit = null;
  if (!inputVisibility) {
    buttonForEdit = <button onClick={openInputForEdit}>edit</button>;
  }
  if (inputVisibility) {
    buttonForEdit = <button onClick={editItem(item)}>edit done</button>;
  }

  return (
    <div className='list-item'>
      <span>{item.text}</span>
      {buttonForEdit}
      <button onClick={deleteItem(item)}>delete</button>
      {inputVisibility && (
        <InputForEdit
          editedValue={editedValue}
          setEditedValue={setEditedValue}
        />
      )}
    </div>
  );
};
