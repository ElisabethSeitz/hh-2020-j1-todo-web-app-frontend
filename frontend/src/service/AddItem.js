import axios from "axios";


export default function addItem({description, status}){
    const url = "/api/todo"
    const newToDo = {description, status}
    axios
        .post(url, newToDo)
        .catch(error => console.log(error));
}