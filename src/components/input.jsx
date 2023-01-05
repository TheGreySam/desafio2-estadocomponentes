import React from "react";


const Input = (props) => {
    //const [error] = useState(false)


    return (
        <div>
            <div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input type="email" className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" 
                    onChange={props.name}></input>
                    <div className={props.class1}>{props.message1}</div>
                    
                </div>
                <div className="form-group p-3">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" 
                    id="exampleInputPassword1" placeholder="Ingresa tu contraseña" 
                    onChange={props.password}></input>
                    <div className={props.class2}>{props.message2}</div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Input;