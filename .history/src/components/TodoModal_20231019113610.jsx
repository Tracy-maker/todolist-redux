import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { addTodo, updateTodo } from "../slices/todoSlice";

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
 

  useEffect(() => {
    if (type === "update" && todo) {
      setTaskTitle(todo.taskTitle);
      setStatus(todo.status);
    } else {
      setTaskTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle) {
      toast.error("Please enter a title");
      return;
    }

    if (type === "add") {
      dispatch(
        addTodo({
          id: uuid(),
          taskTitle,
          status,
          time: new Date().toLocaleString(),
        })
      );
      toast.success("Task added successfully");
    } else if (type === "update") {
      if (todo.taskTitle !== taskTitle || todo.status !== status) {
        dispatch(updateTodo({ ...todo, taskTitle,  status }));
        toast.success("Task updated successfully");
      } else {
        toast.error("No changes made");
        return;
      }
    }
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div className={`modal${modalOpen ? " modal-open" : ""}`}>
          <div className="modal-box relative">
            <label
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
            >
              ✕
            </label>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h1 className="font-bold text-xl mb-8">
                {type === "add" ? "Add" : "Update"} TODO
              </h1>
              <div className="flex flex-col items-start ">
                <label htmlFor="title" className="pb-12 block ">
                  Title:
                  <input
                    type="text"
                    id="tasktitle"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="border-white input mx-4"
                  />
                </label>
      

                <label htmlFor="type" className="pb-8 block">
                  Status:
                  <select
                    id="type"
                    className="p-2 border rounded-md mx-4"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button type="submit" className="mr-6">
                  {type === "add" ? "Add Task" : "Update Task"}
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoModal;
