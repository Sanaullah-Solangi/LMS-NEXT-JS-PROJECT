"use client";
import { addTodo } from "@/app/actions/todos";
import { useRef } from "react";

export default function TodoForm() {
  const formRef = useRef(null);
  return (
    <form
      action={(formData) => {
        addTodo(formData);
        formRef.current.reset();
      }}
      className="flex items-center h-[100px] w-full"
      ref={formRef}
    >
      <input
        type="text"
        name="todo"
        placeholder="Add todo"
        className="w-full p-5 uppercase bg-gray-100 outline-none shadow-none"
      />
      <input
        type="submit"
        value="add"
        className="flex justify-center items-center uppercase bg-purple-500 h-full text-white px-10 cursor-pointer hover:bg-purple-300"
      />
    </form>
  );
}
