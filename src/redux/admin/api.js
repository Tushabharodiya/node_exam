import axios from "axios"
import { BASE_URL, GET_STUDENT } from "../constnt"



let get_student = async () => {
    let {data} = await axios.get(BASE_URL + GET_STUDENT)
    return {data}
}

export { get_student }