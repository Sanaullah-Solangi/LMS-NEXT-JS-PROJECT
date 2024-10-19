import connectDb from "@/lib/db/dbConnect";
import todoModel from "@/lib/modal/todosModel";

const todos = [
  {
    todo: "Task 1",
    id: 1,
    isCompleted: false,
  },
  {
    todo: "Task 2",
    id: 2,
    isCompleted: false,
  },
  {
    todo: "Task 3",
    id: 3,
    isCompleted: false,
  },
  {
    todo: "Task 4",
    id: 4,
    isCompleted: false,
  },
  {
    todo: "Task 5",
    id: 5,
    isCompleted: false,
  },
];

export async function GET(request) {
  connectDb();
  const todos = await todoModel.find();
  return Response.json({
    todos,
    msg: "Todos fetch Successfully",
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    connectDb();
    const todosAdded = await todoModel({ ...data, isCompleted: false });
    await todosAdded.save();
    return Response.json({
      todos: todosAdded,
      msg: "Todo is Added",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function PUT(request) {
  const data = await request.json();
  const todoIndex = todos.findIndex((todo) => todo.id == data.id);

  todos[todoIndex] = data;
  return Response.json({
    data: todos,
    msg: "Todos Are Updated",
  });
}

export async function DELETE(request) {
  const id = await request.json();
  console.log("In api", id);
  const todoDeleted = await todoModel.deleteOne({ _id: id });
  // const todoIndex = todos.findIndex((todo) => todo.id == data.id);
  // todos.splice(todoIndex, 1);
  return Response.json({
    // data: todos,
    msg: "Todos Are Updated",
  });
}
