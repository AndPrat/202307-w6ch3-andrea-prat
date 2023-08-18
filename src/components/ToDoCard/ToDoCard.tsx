import React from "react";
import { ToDo } from "../../types";
import "./toDoCard.css";

export interface ToDoCardProps {
  toDo: ToDo;
}

const ToDoCard = ({
  toDo: { name, isDone },
}: ToDoCardProps): React.ReactElement => {
  return (
    <article className="toDo-card">
      <h2 className="toDo-card__name">{name}</h2>
      <span className="toDo-card__text">Done: {isDone}</span>
      <button className="toDo-card__button">✔️</button>
    </article>
  );
};

export default ToDoCard;
