import { useSelector } from "react-redux";

function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return <div>
    {sortedTodoList && sortedTodoList.length>0 ? sortedTodoList.map((todo)=>todo.title):'No tasks'}
  </div>;
}

export default TodoList;
