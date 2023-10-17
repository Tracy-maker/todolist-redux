import { AiOutlinePlus } from "react-icons/ai";
import TodoModal from "./TodoModal";
import { useState } from "react";

const TaskHeader = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    
      <div className="flex justify-between content-center py-2  mx-10">
        <button onClick={() => setModalOpen(true)} className="btn btn-primary">
          Add new task
          <AiOutlinePlus className="ml-2" size={18} />
        </button>
        <select className="select select-info max-w-xs">
          <option disabled selected>
            Select Task Status
          </option>
          <option>All Tasks</option>
          <option>Completed Tasks</option>
          <option>Incomplete Tasks</option>
        </select>
        <TodoModal
          type="add"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    
  );
};

export default TaskHeader;
