import { takeLatest } from "redux-saga/effects";
import { DELETE_STUDENT_PENDING, GET_STUDENT_PENDING, POST_STUDENT_PENDING, UPDATE_STUDENT_PENDING } from "../../admin/action";
import { handle_add_student, handle_delete_student, handle_get_student, handle_update_student } from "../admin/manageStudent";



function* handle_get_student_saga(params) {
    yield takeLatest(GET_STUDENT_PENDING, handle_get_student)
}

function* handle_add_student_saga(params) {
    yield takeLatest(POST_STUDENT_PENDING, handle_add_student)
}

function* handle_delete_student_saga() {
    yield takeLatest(DELETE_STUDENT_PENDING, handle_delete_student)
}

function* handle_update_student_saga() {
    yield takeLatest(UPDATE_STUDENT_PENDING, handle_update_student)
}

export { handle_get_student_saga, handle_add_student_saga, handle_delete_student_saga, handle_update_student_saga }