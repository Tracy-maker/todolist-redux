import { useSelector } from "react-redux";
import TodoItem from "./TaskItem";

function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className="mt-4">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
        : "No todo task"}
    </div>
  );
}

export default TodoList;
