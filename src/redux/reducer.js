import { addStudent } from "./actionType";

const initState = { studentDetails: [] };

export const reducer = (state=initState, {type,payload}) => {
    switch (type) {
        case addStudent: {
            return { ...state, studentDetails: payload };
        }
        default: {
            return state;
        }
    }
}