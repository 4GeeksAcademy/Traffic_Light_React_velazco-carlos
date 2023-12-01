import React from "react";
import  { useState, useEffect } from 'react';



const TrafficLight = () => {
    const [ colorRed, setColorRed] = useState("");
    const [ colorYellow, setColorYellow] = useState("");
    const [ colorGreen, setColorGreen] = useState("");


      const clickColorRed= ()=>{
        setColorRed("0 0 30px white")
        setColorYellow("")
        setColorGreen("")

    };
    const clickColorYellow= ()=>{
        setColorRed("")
        setColorYellow("0 0 30px white")
        setColorGreen("")

    };
    const clickColorGreen= ()=>{
        setColorRed("")
        setColorYellow("")
        setColorGreen("0 0 30px white")

    };
    // btn btn-
	return (
        <div>
            <div className=" d-flex flex-column align-items-center m-auto bg-dark " style={{width: "20px", height: "120px"}}>1</div>
		<div className=" d-flex flex-column align-items-center gap-3 m-auto p-2 bg-dark" style={{width: "80px", height: "200px"}}>
            
			<div><button type="button" className="btn btn-danger rounded-circle" onClick={clickColorRed} style={{boxShadow: `${colorRed}`, width:"50px", height:"50px" }}></button></div>
			<div><button type="button" className="btn btn-warning rounded-circle" onClick={clickColorYellow} style={{boxShadow: `${colorYellow}`, width:"50px", height:"50px" }}></button></div>
			<div><button type="button" className="btn btn-success rounded-circle" onClick={clickColorGreen} style={{boxShadow: `${colorGreen}` , width:"50px", height:"50px"}}></button></div>
		</div>
        </div>
	);
};

export default TrafficLight;