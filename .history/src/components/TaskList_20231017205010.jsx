function TodoList  ()  {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
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
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TodoList;
  