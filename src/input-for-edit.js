import React from "react";

export const InputForEdit = (props) => {
  const { editedValue, setEditedValue } = props;
  return (
    <input
      className='input-for-edit'
      placeholder='edit your item'
      value={editedValue}
      onChange={(e) => setEditedValue(e.target.value)}
    />
  );
};
