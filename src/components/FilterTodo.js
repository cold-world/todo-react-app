const FilterTodo = ({ setStatusTodo, activeTodos, setTodos }) => {
    const statusHandler = (e) => {
        setStatusTodo(e.target.value)
    }
    const deleteComplitedHandler = () => {
        if (activeTodos) {
            setTodos(activeTodos);
        }
    }
    return (
        <div className="filter-items">
            <div>{activeTodos.length} items left</div>
            <div>
                <button onClick={statusHandler} value={'all'}>All</button>
                <button onClick={statusHandler} value={'active'}>Active</button>
                <button onClick={statusHandler} value={'complited'}>Complited</button>
            </div>
            <div>
                <button onClick={deleteComplitedHandler}>Clear complited</button>
            </div>
        </div>
    )
}

export default FilterTodo;