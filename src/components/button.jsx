import React, { useState } from "react";

const Button = () => {
    
    const handleClick = () => {
        console.log("me diste click")

    }
    return (
        <div className="p-3" >
            <div action="form-group">
            <button id="btn" type="submit" className="btn btn-primary disabled" onClick={(handleClick)}>Submit</button>
            </div>
        </div>
        )
    }
    
export default Button;