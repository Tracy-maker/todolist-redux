import React, {
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [taskTitle, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task added successfully");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task Updated successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModalOpen(false);
    }
  };
  return (
    <>
      {modalOpen && (
        <div className={`modal${modalOpen ? " modal-open" : ""}`}>
          <div className="modal-box relative">
            <label
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </label>
            <form onSubmit={handleSubmitNewTodo}>
              <h1 className="font-bold text-xl mb-8">
                {/* {type === "add" ? "Add" : "Update"} TODO */}
                todo
              </h1>
              <div className="flex flex-col items-start ">
                <label htmlFor="title" className="pb-12 block ">
                  Title:
                  <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="border-white input mx-4"
                  />
                </label>
                <label htmlFor="description" className="pb-12 block">
                  Description:
                  <input
                    type="text"
                    value={taskDescription}
                    onChange={(e) => {
                      setTaskDescription(e.target.value);
                    }}
                    className="border-white input mx-4"
                  />
                </label>

                <label htmlFor="type" className="pb-8 block">
                  Status:
                  <select id="type" className="p-2 border rounded-md mx-4">
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button type="submit" className="mr-6">
                  {/* {type === "add" ? "Add Task" : "Update Task"} */}
                  add
                </button>
                <button onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoModal;
