import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import FilterTodo from './components/FilterTodo';
import { useState, useEffect } from 'react';

//Store
function App() {
  const [inputTodo, setInputTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [statusTodo, setStatusTodo] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);


  //Filtering
  useEffect(() => {
    const filterHandler = () => {
      switch (statusTodo) {
        case 'complited':
          setFilteredTodos(todos.filter(item => item.complited))
          break;
        case 'active':
          setFilteredTodos(todos.filter(item => !item.complited))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }
    filterHandler();
  }, [todos, statusTodo]);

  //Active Todos
  useEffect(() => {
    setActiveTodos(todos.filter(item => !item.complited))
  }, [todos]);


  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Form setInputTodo={setInputTodo} inputTodo={inputTodo} setTodos={setTodos} todos={todos} />
      {filteredTodos.map(todo =>
        <TodoItem todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />)}
      {todos.length ?
        <FilterTodo statusTodo={statusTodo} setStatusTodo={setStatusTodo} activeTodos={activeTodos}
          setFilteredTodos={setFilteredTodos} setTodos={setTodos} /> : ''}
    </div>
  );
}

export default App;
