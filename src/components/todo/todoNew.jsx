import { useState } from "react";

const TodoNew = (props) => {

    // useState Hook (getter/setter)
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const { addNewToDo } = props;

    // addNewToDo("eric");
    const handleClick = () => {
        addNewToDo(valueInput);
        setValueInput("");
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input
                value={valueInput}
                type="text"
                onChange={(event) => handleOnChange(event.target.value)} />
            <button onClick={handleClick} style={{ cursor: "pointer" }}>Add</button>
            <div>My input is = {valueInput}</div>
        </div>
    )
}

export default TodoNew;