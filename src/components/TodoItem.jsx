"use client";
import { deleteTodo, updateTodo } from "@/app/actions/todos";
import { useState } from "react";

export default function TodoItem({ todo }) {
  let { _id, todo: todoText, isCompleted } = todo;
  const [allowEdit, setAllowEdit] = useState(false);
  const [valToUpdate, setValToUpdate] = useState("");

  const updateTask = async () => {
    const obj = { ...todo };
    obj.isCompleted = !obj.isCompleted;
    await updateTodo(obj);
  };

  const editTask = async () => {
    if (!allowEdit) {
      setAllowEdit(true);
      setValToUpdate(todoText);
    } else {
      const obj = {
        ...todo,
      };
      obj.todo = valToUpdate;
      updateTodo(obj);
      setValToUpdate("");
      setAllowEdit(false);
    }
  };
  return (
    <div className="w-full bg-purple-200 rounded-lg flex justify-between items-center">
      {allowEdit ? (
        <input
          type="text"
          className="text-2xl font-mono w-3/4 h-full border-b border-purple-500 flex justify-start items-center p-4 uppercase"
          value={valToUpdate}
          onChange={(e) => {
            setValToUpdate(e.target.value);
          }}
        />
      ) : (
        <h1 className="text-2xl font-mono w-3/4 h-full border-b border-purple-500 flex justify-start items-center p-4 ">
          {todoText}
        </h1>
      )}
      <div className="flex justify-center items-center w-1/4">
        <button
          onClick={() => {
            updateTask();
          }}
          className="whitespace-nowrap flex flex-grow text-2xl uppercase py-4 px-2 bg-purple-700 hover:bg-purple-600 border-b border-purple-700 text-white "
        >
          {isCompleted ? "Done" : "Not Done"}
        </button>
        <button
          onClick={editTask}
          className="whitespace-nowrap flex flex-grow text-2xl uppercase py-4 px-2 bg-green-700 hover:bg-green-600 border-b border-green-700 text-white "
        >
          {allowEdit ? "Update" : "Edit"}
        </button>
        <button
          onClick={() => {
            deleteTodo(_id);
          }}
          className="whitespace-nowrap flex flex-grow text-2xl uppercase py-4 px-2 bg-red-700 hover:bg-red-600 border-b border-red-700 text-white "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
