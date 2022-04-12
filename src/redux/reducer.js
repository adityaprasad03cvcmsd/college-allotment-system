import { addStudent } from "./actionType";

const college = [
    { id:0, name:"IIT Madras", noOfSeats:4 },
    { id:1,name:"IIT Kanpur", noOfSeats:2 },
    { id:2,name:"IIT Bombay", noOfSeats:1 },
    { id:3, name:"IIIT Hyderabad", noOfSeats:3 },
    { id:4, name:"IIT Roorkee", noOfSeats:1 },
    { id:5, name:"IIM Ahemedabad", noOfSeats: 2 }
];

const studentDetails = [{ id:1, "Student Name": "Rohan", "Rank": 2, "College Preference 1": "IIT Kanpur", "College Preference 2": "IIT Madras", "College Preference 3": "IIIT Hyderabad" },
    { id:2, "Student Name": "Ramesh", "Rank": 1, "College Preference 1": "IIT Bombay", "College Preference 2": "IIT Kanpur", "College Preference 3": "IIIT Hyderabad" },
    { id:3, "Student Name": "Ankit", "Rank": 4, "College Preference 1": "IIT Roorkee", "College Preference 2": "IIT Bombay", "College Preference 3": "IIIT Hyderabad" },
    { id:4, "Student Name": "Shubham", "Rank": 9, "College Preference 1": "IIT Kanpur", "College Preference 2": "IIT Madras", "College Preference 3": "IIIT Hyderabad" },
    { id:5, "Student Name": "Roshan", "Rank":3, "College Preference 1":"IIT Bombay", "College Preference 2":"IIT Madras", "College Preference 3":"IIIT Hyderabad"}
]
const initState = {
    studentDetails,
    college};

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