import { addStudent } from "./actionType";

const college = [
    { name:"IIT Madras", noOfSeats:4 },
    { name:"IIT Kanpur", noOfSeats:2 },
    { name:"IIT Bombay", noOfSeats:1 },
    { name:"IIIT Hyderabad", noOfSeats:3 },
    { name:"IIT Roorkee", noOfSeats:1 },
    { name:"IIM Ahemedabad", noOfSeats: 2 }
];

const studentDetails = [{ "Student Name": "Rohan", "Rank": 2, "College Preference 1": "IIT Kanpur", "College Preference 2": "IIT Madras", "College Preference 3": "IIIT Hyderabad" },
    { "Student Name": "Ramesh", "Rank": 1, "College Preference 1": "IIT Bombay", "College Preference 2": "IIT Kanpur", "College Preference 3": "IIIT Hyderabad" },
    { "Student Name": "Ankit", "Rank": 4, "College Preference 1": "IIT Roorkee", "College Preference 2": "IIT Bombay", "College Preference 3": "IIIT Hyderabad" },
    { "Student Name": "Shubham", "Rank": 9, "College Preference 1": "IIT Kanpur", "College Preference 2": "IIT Madras", "College Preference 3": "IIIT Hyderabad" },
    { "Student Name": "Roshan", "Rank":3, "College Preference 1":"IIT Bombay", "College Preference 2":"IIT Madras", "College Preference 3":"IIIT Hyderabad"}
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