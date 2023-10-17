import { Toaster } from "react-hot-toast";
import TaskHeader from "./components/TaskHeader";

function App() {
  return (
    <>
      <div>
        <div class="title inline-block w-full font-poppins text-4xl font-bold uppercase text-center mx-auto mt-8 mb-6 text-black-1 sm:text-3xl">TODO List</div>
        <div>
          <TaskHeader />
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
