import { all } from "redux-saga/effects";
import { handle_get_student_saga } from "./root/studentSaga";



function* rootSaga(params) {
    yield all([handle_get_student_saga()])
}

export default rootSaga;