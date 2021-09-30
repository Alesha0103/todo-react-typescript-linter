import React from "react";
import {InputForEditType} from "./types";

export const InputForEdit:React.FC<InputForEditType> = (props) => {
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
