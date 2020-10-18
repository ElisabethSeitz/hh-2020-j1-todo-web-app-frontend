import addItem from "../service/AddItem";
import React from "react";

export default function AddToDoForm(props) {
    const {setStatus, setDescription, description, status}= props

    return <form>
        <label>description
            <input placeholder="add your to do"
                   value = {description}
                   onChange={event => setDescription(event.target.value)}/>
        </label>
        <label>status
            <select onChange={event => setStatus(event.target.value)}>
                <option value="OPEN">OPEN</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
            </select>
        </label>

        <button disabled={description.length === 0} type="button" onClick={() => {
            addItem({description, status})
            setDescription("");
            setStatus("OPEN");
        }}>Add
        </button>
    </form>

}
