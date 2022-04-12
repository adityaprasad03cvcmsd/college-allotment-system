import styled from "styled-components"

const color = (college) => {
    console.log("college", college)
    if (college==="IIT Bombay")
        return "orange";
    if (college === "IIT Madras")
        return "lightgreen";
    if (college === "IIT Kanpur")
        return "lightpink";
    if (college === "IIT Roorkee")
        return "yellow";
    if (college === "IIIT Hyderabad")
        return "lightblue";
    else
        return "white"
}

export const P = styled.p`
    background-color:${({ college }) => color(college) };
    border-radius:10px;
    width:60%;
    height:25px;
`