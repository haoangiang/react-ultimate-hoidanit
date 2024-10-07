const TodoData = (props) => {
    // Props là một object {}.
    // {
    //     name: "Eric",
    //     age: 25,
    //     data: {}
    // }
    const { name, age, data } = props;
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    console.log(">>> Check props", props);
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div className="todo-item">Learning React</div>
            <div className="todo-item">Watching Youtube</div>
            <div className="todo-item">
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;