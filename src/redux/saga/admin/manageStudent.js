import { call, put } from "redux-saga/effects";
import { add_student, delete_student, get_student, update_student } from "../../admin/api";
import { DELETE_STUDENT_ERROR, DELETE_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_SUCCESS, UPDATE_STUDENT_ERROR, UPDATE_STUDENT_SUCCESS } from "../../admin/action";



function* handle_get_student(action) {
    let { data } = yield call(get_student, action)
    try {
        yield put({ type: GET_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_STUDENT_ERROR, payload: error })
    }
}


function* handle_add_student(action) {
    let { data } = yield call(add_student, action)
    try {
        yield put({ type: POST_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_STUDENT_ERROR, payload: error })
    }
}

function* handle_delete_student(action) {
    let { data } = yield call(delete_student, action)
    try {
        yield put({ type: DELETE_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_STUDENT_ERROR, payload: error })
    }
}


function* handle_update_student(action) {
    let { data } = yield call(update_student, action)
    // console.log(res);
    try {
        yield put({ type: UPDATE_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: UPDATE_STUDENT_ERROR, payload: error })
    }
}

export { handle_get_student, handle_add_student, handle_delete_student, handle_update_student }