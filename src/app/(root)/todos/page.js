import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

export default async function Todos() {
  let todosObj = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  todosObj = await todosObj?.json();
  let todos = todosObj?.todos;
  return (
    <div className="todoContainer flex justify-center items-center flex-col container w-full ">
      <TodoForm />
      <div className="overflow-auto h-[400px] w-full">
        {todos?.map((todo) => {
          return <TodoItem key={todo._id} todo={todo} />;
        })}
      </div>
    </div>
  );
}
