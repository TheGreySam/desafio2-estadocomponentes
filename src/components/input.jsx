import React from "react";

const Input = () => {
    return (
        <div>
            <form>
                <div class="form-group p-3">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre"></input>
                </div>
                <div class="form-group p-3">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contraseña"></input>
                </div>
            </form>
        </div>
    )
}

export default Input;