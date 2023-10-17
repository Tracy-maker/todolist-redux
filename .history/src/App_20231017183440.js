import { Toaster } from "react-hot-toast";
import TaskHeader from "./components/TaskHeader";

function App() {
  return (
    <>
      <div>
        <div>TODO List</div>
        <div>
      <TaskHeader/>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
