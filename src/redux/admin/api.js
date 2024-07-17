import axios from "axios"
import { ADD_STUDENT, BASE_URL, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from "../constnt"
import { addData, deleteData, getData, updateData } from "../api/api"



let get_student = async () => {
    // let {data} = await axios.get(BASE_URL + GET_STUDENT)
    // return {data}
    let { data } = await getData(GET_STUDENT)
    return { data }
}


let add_student = async (action) => {
    let { data } = await addData(ADD_STUDENT, action.payload)
    return { data }
}

let delete_student = async (action) => {
    let { data } = await deleteData(DELETE_STUDENT, action.payload)
    return { data }
}


let update_student = async (action) => {
    let {data} = await axios.put(BASE_URL + UPDATE_STUDENT + `/${action.payload.id}`, action.payload)
    return { data }
    // console.log(res);
}


export { get_student, add_student, delete_student, update_student }