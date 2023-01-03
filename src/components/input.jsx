import React, { useState } from "react";


const Input = (props) => {
    
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    

    return (
        <div>
            <div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" onChange={props.nombre}></input>
                </div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" onChange={props.contraseña}></input>
                </div>
                
            </div>
        </div>
    )
}

export default Input;