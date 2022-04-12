import { useSelector } from "react-redux"

export const Result = () => {
    const { studentDetails, college } = useSelector((store) => store);
    
    let count = Array(college.length);
    for (let i = 0; i < count.length; i++)
        count[i] = 0;
    const arr = [...studentDetails]
    console.log(count);
    return (
        <div></div>
    )
}