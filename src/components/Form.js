import { v4 } from 'uuid';

const Form = ({setInputTodo, inputTodo, setTodos, todos}) => {
    const handleChange = (e) => {
        setInputTodo(e.target.value);
    }
    const addTodoHandler = (e) => {
        e.preventDefault();
        if(inputTodo !== '')
        setTodos([...todos, {text: inputTodo , complited: false, id: v4() }]);
        setInputTodo('');
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} value={inputTodo} className="form-input" type="text" placeholder='input your task' />
                <button onClick={addTodoHandler} type='submit' className="form-btn">Add</button>
            </form>
            
        </div>
    )
}

export default Form;