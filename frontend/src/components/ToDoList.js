import deleteItem from "../service/DeleteItem";
import React from "react";
import changeStatusOfItem from "../service/ChangeStatusOfItem";


export default function ToDoList(props){
    const {toDoList, deletedItem, setDeletedItem, status, setStatus} = props

    return(
    <div>
    {toDoList.map(item =>
    <div key = {item.id}>
        {item.description} {item.status}
        <button onClick={() => {changeStatusOfItem({item}, {status}, {setStatus})}}>Change status</button>
        <button onClick={() => {deleteItem(item.id); setDeletedItem(!deletedItem)}}>Delete</button>
    </div>)}
    </div>)
}