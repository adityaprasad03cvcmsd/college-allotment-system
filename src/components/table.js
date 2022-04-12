import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddStudent } from "../redux/action";
import { Th, Td } from "../styledComponents/tableComponents"
// import {useNavigate} from "react-router-dom"
export const Table = () => {
    const dispatch = useDispatch();
    // const navigate=useNavigate();

    const [rows, SetRows] = useState([{}]);
    const columnNames = ["Student Name", "Rank", "College Preference 1", "College Preference 2", "College Preference 3"];

    const updateRows = (e) => {
        let name = e.target.attributes.column.value;
        let index = e.target.attributes.index.value;
        let Value = e.target.value;
    
        const newrows = [...rows];
        const newobj = rows[index];
        newobj[name] = Value;
        newrows[index] = newobj;
        SetRows(newrows);
    }

    const newStudent = () => {
        const temp = {};
        SetRows([...rows, temp]);
    }

    const goToResult = () => {
        const addingStudents= AddStudent(rows);
        dispatch(addingStudents);
        
    }

    const PopUp = () => {
        const [stuName, setStuName] = useState("");
        const [rank, setRank] = useState("");
        
        return (
            <div id="popup">
                <h3 class="popupTitleBar">Add now</h3>
                <table>
                    <tr>
                        <th>Student Name</th>
                        <th><input onchange={(e)=>{}}/></th>
                    </tr>
                    <tr></tr>
                </table>
            </div>
        )
    }
    return (
        <div>
            <h1>College Allotment System</h1>
            <br></br>
            <br></br>
            <h3>Student List</h3>
            <table>
                <thead>
                    <tr>
                        {columnNames.map((el, index) => {
                            return <Th key={index}>{el}</Th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((elRows, indexRows) => {
                        return <tr key={indexRows}>
                            {columnNames.map((el, index) => {
                                return <Td key={index}>
                                    <input
                                        type="text"
                                        column={el}
                                        value={rows[indexRows][el]}
                                        index={indexRows}
                                        onChange={(e) => updateRows(e)}
                                    />
                                </Td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            <button onClick={newStudent}>Add New Student</button>
            <button onClick={goToResult}>Results</button>
        </div>
    )
}