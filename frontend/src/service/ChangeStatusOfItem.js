import React, {useState} from "react";
import axios from "axios";

export default function changeStatusOfItem({item}, {status}, {setStatus}) {

    const{id, description} = item

    const url = "/api/todo/" + id;

    if (status === "OPEN") {
        setStatus("IN_PROGRESS");
    } else {
        setStatus("DONE");
    }

    const updatedItem = {id, description, status}
console.log(updatedItem)
    return axios
        .put(url, updatedItem)
        .catch(error => console.log(error))
}
