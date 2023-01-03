import React, { useState } from "react";

const Input = () => {
    const [contraseña, setContraseña] = useState("")
    
    return (
        <div>
            <form>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre"></input>
                </div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña" onChange={(e) => setContraseña(e.target.value)}></input>
                </div>
            </form>
        </div>
    )
}

export default Input;