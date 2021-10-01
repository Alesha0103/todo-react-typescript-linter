import React from 'react';
import { InputForEditType } from './types';

export const InputForEdit: React.FC<InputForEditType> = (props) => {
  const { inputForEditRef } = props;
  return (
    <input
      ref={inputForEditRef}
      placeholder="edit your item"
      className="input-for-edit"
    />
  );
};
