import "./result.css"

import down from "../images/down.png";
import index from "../images/index.png"
import downward from "../images/downward.jpg";

import { useSelector } from "react-redux"
import {Th, Td} from "../styledComponents/tableComponents"
import { P } from "../styledComponents/P";

export const Result = () => {
    const { studentDetails, college } = useSelector((store) => store
    );
    const prefer1 = "College Preference 1";
    const prefer2 = "College Preference 2";
    const prefer3 = "College Preference 3";
    const stuName = "Student Name";

    let seatsCounting = {};
    for (let i = 0; i < college.length; i++){
        let {name,noOfSeats}=college[i]
        seatsCounting[name] = noOfSeats
        seatsCounting[name+"Count"]=0
    }
    console.log(seatsCounting);
    let allotment={}
    let arr = [...studentDetails];
    arr.sort((a, b) => {
        let Ranka = +(a.Rank)
        let Rankb = +(b.Rank)
        if (Ranka > Rankb)
            return 1;
        else
            return -1;
    })
    for (let i = 0; i < arr.length; i++){
        let tempPrefer1 = arr[i][prefer1];
        let tempPrefer2 = arr[i][prefer2];
        let tempPrefer3 = arr[i][prefer3];
        console.log(seatsCounting[tempPrefer1] > seatsCounting[tempPrefer1 + "Count"])

        if (seatsCounting[tempPrefer1] > seatsCounting[tempPrefer1 + "Count"]) {
            seatsCounting[tempPrefer1 + "Count"] = seatsCounting[tempPrefer1 + "Count"] + 1;            
            allotment[arr[i][stuName]] = tempPrefer1;
        }
        else if (seatsCounting[tempPrefer2] > seatsCounting[tempPrefer2 + "Count"]) {
            seatsCounting[tempPrefer2 + "Count"] = seatsCounting[tempPrefer2 + "Count"] + 1;            
            allotment[arr[i][stuName]] = tempPrefer2;
        }
        else {
            seatsCounting[tempPrefer3 + "Count"] = seatsCounting[tempPrefer3 + "Count"] + 1;            
            allotment[arr[i][stuName]] = tempPrefer3;
        }
    }

    console.log(arr,allotment)
    return (
        <div>
            <br></br>
            <h3>Results</h3>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <Th><img  src={index} className="image" alt=""/>Student Name <img  src={downward} className="image2" alt=""/></Th>
                        <Th>#Rank<img  src={downward} className="image2" alt=""/></Th>
                        <Th><img  src={down} className="image1" alt=""/>Alloted College<img  src={downward} className="image2" alt=""/></Th>
                    </tr>
                </thead>
                <tbody>
                    {studentDetails.map((el => {
                        return <tr>
                            <Td>{el[stuName]}</Td>
                            <Td>{el["Rank"]}</Td>
                            <Td color={allotment[el[stuName]] }><P college={allotment[el[stuName]]}>{ allotment[el[stuName]]}</P></Td>
                        </tr>
                    }))}
                </tbody>
            </table>
            <br></br>
            <br></br>
        </div>
    )
}