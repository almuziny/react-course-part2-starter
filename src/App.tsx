import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
