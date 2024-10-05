const TodoNew = (props) => {
    console.log(">>> Check point: ", props);
    const { addNewToDo } = props;

    // addNewToDo("eric");
    const handleClick = () => {
        alert("Click me")
    }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button onClick={handleClick} style={{ cursor: "pointer" }}>Add</button>
        </div>
    )
}

export default TodoNew;