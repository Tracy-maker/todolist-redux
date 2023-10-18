import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  try {
    const localTodoList = window.localStorage.getItem("todoList");
    if (localTodoList) {
      const parsedList = JSON.parse(localTodoList);
      // Check if parsedList is an array
      return Array.isArray(parsedList) ? parsedList : [];
    }
    window.localStorage.setItem("todoList", JSON.stringify([]));
    return [];
  } catch (error) {
    console.error("Error accessing or parsing localStorage:", error);
    return [];
  }
};


const initialValue = {
  filterStatus: "all",
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push(action.payload);
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([action.payload])
        );
      }
    },

    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const updatedTodoListArr = todoListArr.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        );
    
        window.localStorage.setItem("todoList", JSON.stringify(updatedTodoListArr));
        return { ...state, todoList: updatedTodoListArr };
      }
    },
    

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const updatedTodoListArr = todoListArr.filter(
          (todo) => todo.id !== action.payload
        );

        window.localStorage.setItem(
          "todoList",
          JSON.stringify(updatedTodoListArr)
        );
        return { ...state, todoList: updatedTodoListArr };
      }
    },

    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
