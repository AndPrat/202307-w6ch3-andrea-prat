import { useAppSelector } from "../../store";
import ToDoCard from "../ToDoCard/ToDoCard";
import "./ToDosList.css";

const ToDosList = (): React.ReactElement => {
  const toDos = useAppSelector((state) => state.toDoState.toDos);

  return (
    <ul className="toDos-list">
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          <ToDoCard toDo={toDo} />
        </li>
      ))}
    </ul>
  );
};

export default ToDosList;
