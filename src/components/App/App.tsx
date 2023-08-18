import { useEffect } from "react";
import { toDoData } from "../../data/toDosData";
import { useAppDispatch } from "../../store";
import { loadToDosActionCreator } from "../../store/toDos/toDosSlice";
import ToDosList from "../ToDosList/ToDosList";
import "./App.css";

const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadToDosActionCreator(toDoData));
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">To Do list</h1>
      <ToDosList />
    </div>
  );
};

export default App;
