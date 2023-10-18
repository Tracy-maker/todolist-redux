import { format, isValid, parse } from "date-fns";
import { useState } from "react";
import TodoModal from "./TodoModal";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import toast from "react-hot-toast";

function TaskItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const parsedDate = parse(todo.time, "dd/MM/yyyy, HH:mm:ss", new Date());
  const formattedDate = isValid(parsedDate)
    ? format(parsedDate, "p, MM/dd/yyyy")
    : "Invalid Date";
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo')
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" checked={checked} handleCheck={handleCheck} />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{todo.title}</div>
                </div>
              </div>
            </td>
            <td>{todo.description}</td>
            <td>{formattedDate}</td>

            <th>
              <button
                onClick={handleDelete}
                onKeyDown={handleDelete}
                className="btn btn-ghost btn-xs"
              >
                Delete
              </button>
            </th>
            <th>
              <button
                onClick={() => handleUpdate()}
                onKeyDown={() => handleUpdate()}
                className="btn btn-ghost btn-xs"
              >
                Edit
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </div>
  );
}

export default TaskItem;
