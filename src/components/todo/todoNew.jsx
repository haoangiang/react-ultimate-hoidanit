const TodoNew = (props) => {
    console.log(">>> Check point: ", props);
    const { addNewToDo } = props;

    // addNewToDo("eric");
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;