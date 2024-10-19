"use server";

import { revalidatePath } from "next/cache";

export async function add(formData) {
  try {
    const todo = formData.get("todo");
    const res = await fetch("http://localhost:3001/api/courses", {
      method: "POST",
      body: JSON.stringify({ course: todo }),
    });

    revalidatePath("/api/courses");
  } catch (error) {
    console.log(error);
  }
}

export async function addTodo(formData) {
  try {
    const todo = formData.get("todo");
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
      cache: "no-cache",
    });
    revalidatePath("/api/todos");
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(obj) {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {
      method: "PUT",
      body: JSON.stringify(obj),
      cache: "no-cache",
    });
    revalidatePath("/api/todos");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/todos`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });
    revalidatePath("/api/todos");
  } catch (error) {
    console.log(error);
  }
}
