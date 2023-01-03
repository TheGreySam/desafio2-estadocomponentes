import React, { useState } from "react";

const Input = () => {
    
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");

    const validarContraseña = (e) => {
        
        if(contraseña === '252525') {
            alert('contraseña correcta')
        } else {
            alert('Error: contraseña incorrecta')
        }
    }    

    return (
        <div>
            <div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" onChange={(e) => setNombre(e.target.value)}></input>
                </div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" onChange={(e) => setContraseña(e.target.value)}></input>
                </div>
                <div action="form-group">
                    <button id="btn" type="submit" className="btn btn-primary " onClick={() => {validarContraseña()}}>ver datos</button>
                </div>
            </div>
        </div>
    )
}

export default Input;