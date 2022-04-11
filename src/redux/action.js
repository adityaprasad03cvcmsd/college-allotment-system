import { addStudent } from "./actionType";

export const AddStudent = (payload) => {
    return {
        type: addStudent,
        payload
    }
};