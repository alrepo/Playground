import React from "react";
import './styles.css';

function Illustration()
{
    var x = 2;
    return(
        <h1 style={x==1? {backgroundColor: "red"}:{backgroundColor: "yellow"}}>Jobs</h1>
    )
}

export default Illustration;