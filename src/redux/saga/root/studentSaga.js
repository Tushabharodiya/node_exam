import { takeLatest } from "redux-saga/effects";
import { GET_STUDENT_PENDING } from "../../admin/action";
import { handle_get_student } from "../admin/manageStudent";



function* handle_get_student_saga(params) {
    yield takeLatest(GET_STUDENT_PENDING, handle_get_student)
}

export { handle_get_student_saga }