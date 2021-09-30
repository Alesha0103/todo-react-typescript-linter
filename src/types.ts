import { Dispatch, SetStateAction } from "react";

export type ItemType = {
    id: number,
    text: string
  }
export interface TodoItemsType {
    item: ItemType,
    todoArray: ItemType[],
    setTodoArray: Dispatch<SetStateAction<ItemType[]>>,
}
export interface InputForEditType {
    editedValue:any,
    setEditedValue:any,
}