import { AiOutlinePlus } from "react-icons/ai";
import TodoModal from "./TodoModal";
import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TaskHeader() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(
    initialFilterStatus || "all"
  );

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(setFilterStatus(e.target.value));
  };

  return (
    <div className="flex justify-between content-center py-2  mx-10">
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary flex items-center"
      >
        Add new task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <label htmlFor="status">Filter by Status:</label>
      <select
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
        className="select select-info max-w-xs"
      >
        <option value="" disabled>
          Select Task Status
        </option>
        <option value="all">All</option>
        <option value="complete">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default TaskHeader;
