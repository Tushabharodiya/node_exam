import { all } from "redux-saga/effects";
import { handle_add_student_saga, handle_delete_student_saga, handle_get_student_saga, handle_update_student_saga } from "./root/studentSaga";



function* rootSaga(params) {
    yield all([handle_get_student_saga(),
        handle_add_student_saga(),
        handle_delete_student_saga(),
        handle_update_student_saga()
    ])
}

export default rootSaga;