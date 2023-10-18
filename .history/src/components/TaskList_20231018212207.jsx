import { useSelector } from "react-redux";
import TodoItem from "./TaskItem";

function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state)=>state.todo.filterStatus);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  console.log(todoList);

  return (
    <div className="mt-6">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : "No todo task"}
    </div>
  );
}

export default TodoList;
