const TodoItem = ({todos, todo, setTodos}) => {
    const deleteTodoHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    const submitTodoHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item, complited: !item.complited}
            } else return item;
        }))
    }

    return (
        <div className="todo-item">
            <button onClick={submitTodoHandler} className='todo-button-submit'>Submit</button>
            <div className="todo-name"style={{textDecoration : todo.complited ? 'line-through' : ''}}>{todo.text}</div>
            <button onClick={deleteTodoHandler} className='todo-button-delete'>Delete</button>
        </div>
    )
}

export default TodoItem;