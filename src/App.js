import Input from './components/input';
import Header from './components/header';
import Button from './components/button';
import Footer from './components/footer';
import React, {useState} from "react";
import './App.css';


function App() {
  let [nombre, setNombre] = useState("");
    let [contraseña, setContraseña] = useState("");
     let [mostrar, toggleMostrar] = React.useState(true);
     let clase = "btn btn-primary disabled";

     let validarContraseña = (e) => {
         //e.preventDefault();
         if(contraseña === '252525') {
             //{mostrar && <div><Button /></div>}
             //console.log('contraseña correcta')
             clase = "btn btn-primary"
         } else {
             //alert('Error: contraseña incorrecta')
             clase = "btn btn-primary disabled"
         }
     } 
     validarContraseña()

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='m-5 pb-5'>
          <Input 
          nombre= {(e) => setNombre(e.target.value)}
          contraseña= {(e) => setContraseña(e.target.value)}/>
          <Button
          className = {clase}/> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
