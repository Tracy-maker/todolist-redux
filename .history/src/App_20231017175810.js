import TaskHeader from "./components/TaskHeader";

function App() {
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-white text-4xl font-bold">Todo List App</h1>
        <TaskHeader />
      </div>
    </div>
  );
}

export default App;
