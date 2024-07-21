import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
