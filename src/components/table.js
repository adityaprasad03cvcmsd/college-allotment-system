import './table.css';
import cancel from "../images/cancle.png";
import down from "../images/down.png";
import index from "../images/index.png"
import downward from "../images/downward.jpg";
 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddStudent } from "../redux/action";
import {v4 as uuid} from "uuid"

import { Th, Td, Thpop } from "../styledComponents/tableComponents";
import { Button } from '../styledComponents/Button';
import { Input } from '../styledComponents/Input';
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
            "College Preference 3": prefer3,
            id:uuid()
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
                            <Thpop>Student Name</Thpop>
                            <th><input onInput={(e)=>{setStuName(e.target.value)}}/></th>
                        </tr>
                        <tr>
                            <Thpop>Rank</Thpop>
                            <th><input onInput={(e)=>{setRank(e.target.value)}}/></th>
                        </tr>
                        <tr>
                            <Thpop>College Preference 1</Thpop>
                            <th>
                                <select onChange={(e)=>{setprefer1(e.target.value)}}>
                                    <option value="IIT Madras">IIT Madras</option>
                                    <option value="IIT Kanpur">IIT Kanpur</option>
                                    <option value="IIT Bombay">IIT Kanpur</option>
                                    <option value="IIIT Hyderabad">IIIT Hyderabad</option>
                                    <option value="IIT Roorkee">IIT Roorkee</option>
                                    <option value="IIM Ahmedabad">IIM Ahmedabad</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <Thpop>College Preference 2</Thpop>
                            <th>
                                <select onChange={(e)=>{setprefer2(e.target.value)}}>
                                    <option value="IIT Madras">IIT Madras</option>
                                    <option value="IIT Kanpur">IIT Kanpur</option>
                                    <option value="IIIT Hyderabad">IIIT Hyderabad</option>
                                    <option value="IIT Roorkee">IIT Roorkee</option>
                                    <option value="IIM Ahmedabad">IIM Ahmedabad</option>
                                </select>
                            </th>
                        </tr>
                        <tr>
                            <Thpop>College Preference 3</Thpop>
                            <th>
                                <select onChange={(e)=>{setprefer3(e.target.value)}}>
                                    <option value="IIT Madras">IIT Madras</option>
                                    <option value="IIT Kanpur">IIT Kanpur</option>
                                    <option value="IIIT Hyderabad">IIIT Hyderabad</option>
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
                    <button className="cancle" onClick={()=>{setFlag(false)}}><img className="image" src={cancel} alt=""/> Cancle</button>
                    <button className="save" onClick={handleStudent}>Save</button>
                </div>
                
            </div>
        )
    }

    return (
        <div className='title'>
            <p>Student List</p>
            <table>
                <thead>
                    <tr>
                        <Th> <img  src={index} className="image" alt=""/>{columnNames[0]} <img  src={downward} className="image2" alt=""/></Th>
                        <Th>#{columnNames[1]}<img  src={downward} className="image2" alt=""/></Th>
                        <Th><img  src={down} className="image1" alt=""/>{columnNames[2]}<img  src={downward} className="image2" alt=""/></Th>
                        <Th><img  src={down} className="image1" alt=""/>{columnNames[3]}<img  src={downward} className="image2" alt=""/></Th>
                        <Th><img  src={down} className="image1" alt=""/>{columnNames[4]}<img  src={downward} className="image2" alt=""/></Th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((elRows, indexRows) => {
                        return <tr key={indexRows}>
                            {columnNames.map((el, index) => {
                                // console.log(el)
                                return <Td key={index} colleg={rows[indexRows][el]}>
                                    <Input
                                        type="text"
                                        column={el}
                                        value={rows[indexRows][el]}
                                        index={indexRows}
                                        college={ rows[indexRows][el] }
                                        onChange={(e) => updateRows(e)}
                                    />
                                </Td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            <br></br>
            <Button onClick={()=>{setFlag(true)}}>Add New Student</Button>
            <Button onClick={goToResult}>Get Results</Button>

            {flag ? PopUp() : null}
        </div>
    )
}
