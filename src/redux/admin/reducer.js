import { DELETE_STUDENT_ERROR, DELETE_STUDENT_PENDING, DELETE_STUDENT_SUCCESS, GET_STUDENT_ERROR, GET_STUDENT_PENDING, GET_STUDENT_SUCCESS, POST_STUDENT_ERROR, POST_STUDENT_PENDING, POST_STUDENT_SUCCESS, UPDATE_STUDENT_ERROR, UPDATE_STUDENT_PENDING, UPDATE_STUDENT_SUCCESS } from "./action";

let initailState = {
    student: [],
    isLoading: false,
    isError: null,
}


let adminReducer = (state = initailState, action) => {
    console.log(action);

    switch (action.type) {
        case (GET_STUDENT_PENDING, POST_STUDENT_PENDING, DELETE_STUDENT_PENDING, UPDATE_STUDENT_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        };
        //get
        case (GET_STUDENT_SUCCESS): {
            return {
                ...state,
                student: action.payload,
                isLoading: false,
            }
        };
        //post
        case (POST_STUDENT_SUCCESS): {
            return {
                ...state,
                isLoading: false,
                student: state.student.concat(action.payload)
            }
        }
        //delete
        case (DELETE_STUDENT_SUCCESS): {
            return {
                ...state,
                isLoading: false,
                student: state.student.filter((val) => val.id != action.payload.id)
            }
        }
        //update
        case { UPDATE_STUDENT_SUCCESS }: {
            return {
                ...state,
                isLoading: false,
                student: state.student.map((val) => val.id == action.payload.id ? { ...action.payload } : val)
            }
        }
        case (GET_STUDENT_ERROR, POST_STUDENT_ERROR, DELETE_STUDENT_ERROR, UPDATE_STUDENT_ERROR): {
            return {
                ...state,
                isError: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}


export default adminReducer;