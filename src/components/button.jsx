import React from "react";

const Button = (props) => {
    
    const handleClick = () => {
        console.log("contraseña correcta")

    }
    
    return (
        <div className="p-3" >
            <div action="form-group">
            <button id="btn" type="submit" className={props.className} onClick={(handleClick)}>Submit</button>
            </div>
        </div>
        )
    }
    
export default Button;