import './table.css';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent } from "../redux/action";
import { Th, Td } from "../styledComponents/tableComponents"
// import {useNavigate} from "react-router-dom"
export const Table = () => {
    const dispatch = useDispatch();
    const student = useSelector((store) => store.studentDetails)
    
    const [rows, SetRows] = useState(student);
    const columnNames = ["Student Name", "Rank", "College Preference 1", "College Preference 2", "College Preference 3"];
    const [flag, setFlag] = useState(false);

    //inside oppup
    const [stuName, setStuName] = useState("");
    const [rank, setRank] = useState("");
    const [prefer1, setprefer1] = useState("IIT Madras");
    const [prefer2, setprefer2] = useState("IIT Madras");
    const [prefer3, setprefer3]=useState("IIT Madras")
    
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

    const goToResult = () => {
        const addingStudents= AddStudent(rows);
        dispatch(addingStudents);        
    }

    const handleStudent = () => {
        let temp = {
            "Student Name": stuName,
            "Rank": rank,
            "College Preference 1": prefer1,
            "College Preference 2": prefer2,
            "College Preference 3": prefer3
        }
        console.log(temp);
        SetRows([...rows, temp]);
        console.log(rows)
        setFlag(false);
    }

    const PopUp = () => {
        return (
            <div id="popup">
                <p className="popupTitleBar">Add now</p>
                <br></br>
                <table>
                    <tbody>
                        <tr>
                            <Th>Student Name</Th>
                            <th><input onInput={(e)=>{setStuName(e.target.value)}}/></th>
                        </tr>
                        <tr>
                            <Th>Rank</Th>
                            <th><input onInput={(e)=>{setRank(e.target.value)}}/></th>
                        </tr>
                        <tr>
                            <Th>College Preference 1</Th>
                            <th>
                                <select onChange={(e)=>{setprefer1(e.target.value)}}>
                                    <option value="IIT Madras">IIT Madras</option>
                                    <option value="IIT Kanpur">IIT Kanpur</option>
                                    <option value="IIT Bombay">IIT Kanpur</option>
                                    <option value="IIT Hyderabad">IIIT Hyderabad</option>
                                    <option value="IIT Roorkee">IIT Roorkee</option>
                                    <option value="IIM Ahmedabad">IIM Ahmedabad</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <Th>College Preference 2</Th>
                            <th>
                                <select onChange={(e)=>{setprefer2(e.target.value)}}>
                                    <option value="IIT Madras">IIT Madras</option>
                                    <option value="IIT Kanpur">IIT Kanpur</option>
                                    <option value="IIT Hyderabad">IIIT Hyderabad</option>
                                    <option value="IIT Roorkee">IIT Roorkee</option>
                                    <option value="IIM Ahmedabad">IIM Ahmedabad</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <Th>College Preference 3</Th>
                            <th>
                                <select onChange={(e)=>{setprefer3(e.target.value)}}>
                                    <option value="IIT Madras">IIT Madras</option>
                                    <option value="IIT Kanpur">IIT Kanpur</option>
                                    <option value="IIT Hyderabad">IIIT Hyderabad</option>
                                    <option value="IIT Roorkee">IIT Roorkee</option>
                                    <option value="IIM Ahmedabad">IIM Ahmedabad</option>
                                </select>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="popFlex">
                    <button className="cancle" onClick={()=>{setFlag(false)}}>Cancle</button>
                    <button className="save" onClick={handleStudent}>Save</button>
                </div>
                
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
            <button onClick={()=>{setFlag(true)}}>Add New Student</button>
            <button onClick={goToResult}>Results</button>

            {flag?PopUp():null}
        </div>
    )
}
