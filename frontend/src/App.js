import React, {useEffect, useState} from 'react';
import axios from "axios";
import AddToDoForm from "./components/AddToDoForm";
import ToDoList from "./components/ToDoList";



function App() {
  const url = "/api/todo";
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("OPEN");
  const [toDoList, setToDoList] = useState([]);
  const [deletedItem, setDeletedItem] = useState(false);

  useEffect(() => {
      axios.get(url)
          .then(response => response.data)
          .then(data => setToDoList(data))
          .catch(error => console.log(error));
  }, [toDoList, deletedItem]);


    return (
    <div>
        <ToDoList
        deletedItem={deletedItem} setDeletedItem={setDeletedItem} toDoList={toDoList} status={status} setStatus={setStatus}
        />
        <div>
          <AddToDoForm
          setStatus={setStatus} setDescription={setDescription} description={description} status={status}
          />
        </div>
    </div>
  );
}

export default App;


