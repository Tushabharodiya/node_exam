import { GET_STUDENT_ERROR, GET_STUDENT_PENDING, GET_STUDENT_SUCCESS } from "./action";

let initailState = {
    student: [],
    isLoading: false,
    isError: null,
}


let adminReducer = (state = initailState, action) => {
    console.log(action);

    switch (action.type) {
        case (GET_STUDENT_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        };
        case (GET_STUDENT_SUCCESS): {
            return {
                ...state,
                student: action.payload,
                isLoading: false,
            }
        };
        case (GET_STUDENT_ERROR): {
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