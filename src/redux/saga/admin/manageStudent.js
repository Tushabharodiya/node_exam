import { call, put } from "redux-saga/effects";
import { get_student } from "../../admin/api";
import { GET_STUDENT_ERROR, GET_STUDENT_SUCCESS } from "../../admin/action";



function* handle_get_student(action) {
    let { data } = yield call(get_student, action)
    try {
        yield put({ type: GET_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_STUDENT_ERROR, payload: error })
    }
}

export { handle_get_student }