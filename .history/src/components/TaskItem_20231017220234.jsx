import { format, isValid, parse } from "date-fns";

function TaskItem({ todo }) {
  const parsedDate = parse(todo.time, "dd/MM/yyyy, HH:mm:ss", new Date());
  const formattedDate = isValid(parsedDate)
    ? format(parsedDate, "p, MM/dd/yyyy")
    : "Invalid Date";
  const handleDelete = () => {};

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
                <input type="checkbox" className="checkbox" />
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
    </div>
  );
}

export default TaskItem;
