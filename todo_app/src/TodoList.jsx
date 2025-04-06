import { useState, useEffect } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    const trimmed = newTodo.trim();
    if (trimmed) {
      setTodos([...todos, trimmed]);
      setNewTodo("");
    }
  };

  const deleteTask = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todo-container">
      <h2 className="heading">📝 My Todo App</h2>
      <p className="tagline">Stay organized, stay productive</p>

      <div className="input-section">
        <input
          type="text"
          value={newTodo}
          placeholder="Add your task"
          onChange={handleInputChange}
          className="task-input"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask} className="add-btn">Add</button>
      </div>

      <ul className="task-list">
        {todos.map((todo, index) => (
          <li key={index} className="task-item">
            {todo}
            <button onClick={() => deleteTask(index)} className="delete-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;