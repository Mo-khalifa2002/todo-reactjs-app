import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setfilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Mk's todo project</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;


