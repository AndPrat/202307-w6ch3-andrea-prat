import React from "react";
import { ToDo } from "../../types";

export interface ToDoCardProps {
  toDo: ToDo;
}

const ToDoCard = ({
  toDo: { name, isDone },
}: ToDoCardProps): React.ReactElement => {
  return (
    <article className="toDo-card">
      <h2>{name}</h2>
      <span>Done: {isDone}</span>
    </article>
  );
};

export default ToDoCard;
