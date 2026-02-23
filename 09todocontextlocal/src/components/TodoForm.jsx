import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Todo.."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
