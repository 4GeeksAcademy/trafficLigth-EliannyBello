// src/TrafficLight.js
import React, { useState, useEffect } from 'react';


const TrafficLight = () => {
    const [color, setColor] = useState("");
    const colors = ["red", "yellow", "green"];
    /*  useEffect(() => {
 
         const interval = setInterval(() => {
             let currentColorIndex = Math.floor(Math.random()* colors.length)
             setColor(colors[currentColorIndex]);
         }, 3000);
 
         return () => clearInterval(interval);
     }, []); */
    useEffect(() => {
        let currentColorIndex = 0
        const interval = setInterval(() => {
            setColor(colors[currentColorIndex]);
            if (currentColorIndex == 2) currentColorIndex = 0
            else currentColorIndex += 1
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container my-5">
            <div className="semaforo">
                <div className={`luces-circulo red ${color === "red" ? "selectedRed" : ""}`} onClick={() => setColor("red")}></div>
                <div className={`luces-circulo yellow ${color === "yellow" ? "selectedYellow" : ""}`} onClick={() => setColor("yellow")}></div>
                <div className={`luces-circulo green ${color === "green" ? "selectedGreen" : ""}`} onClick={() => setColor("green")}></div>
            </div>
            <div class="stick"></div>
            <div class="floor"></div>
        </div>
    );
};

export default TrafficLight;
