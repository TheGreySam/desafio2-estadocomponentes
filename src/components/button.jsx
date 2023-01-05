import React from "react";

const Button = (props) => {

    const handleClick = () => {
        alert("Has ingresado correctamente")
        console.log("Has ingresado correctamente")

    }
    
    return (
        <div className="p-3" >
            <div action="form-group">
            <button id="btn" type="submit" className={props.className} onClick={(handleClick)}>{props.welcome}</button>
            </div>
        </div>
        )
    }
    
export default Button;