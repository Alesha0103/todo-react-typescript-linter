import { Dispatch, LegacyRef, SetStateAction } from 'react';

export type ItemType = {
  id: number;
  text: string | undefined;
};
export interface TodoItemsType {
  item: ItemType;
  todoArray: ItemType[];
  setTodoArray: Dispatch<SetStateAction<ItemType[]>>;
}
export interface InputForEditType {
  inputForEditRef: LegacyRef<HTMLInputElement>;
}
