import Input from './components/input';
import Header from './components/header';
import Button from './components/button';
import Footer from './components/footer';
import React, {useState} from "react";
import './App.css';


function App() {
  let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let messageName = ""
    let messagePassword = ""
    let welcomeMsg = ""
     let classPassword = ""
     let className = ""
     let clase = "btn btn-primary disabled";

     let validatePassword = (e) => {
         //e.preventDefault();
         
         if(name === "") {
          className="bg-warning form-control text-white"
          messageName="Ingresa tu nombre"
         }
         if(password === '252525') {
             //{mostrar && <div><Button /></div>}
             //console.log('contraseña correcta')
             clase = "btn btn-primary"
             classPassword="bg-success form-control text-white"
             messagePassword = "contraseña correcta"
             
             
             welcomeMsg= `bienvenido ${name}, ya puedes ingresar`
         } 
         else if(password === '') {
          messagePassword = ""
         } else {
             //alert('Error: contraseña incorrecta')
             classPassword="bg-danger form-control text-white"
             messagePassword = "contraseña incorrecta"
             clase = "btn btn-primary-outline disabled"
             
         }
     } 
     validatePassword()

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='m-5 pb-5'>
          <Input 
          name= {(e) => setName(e.target.value)}
          password= {(e) => setPassword(e.target.value)}
          class1= {className}
          class2= {classPassword}
          message1= {messageName}
          message2= {messagePassword}
          />
          
          
          <Button
          name= {(e) => setName(e.target.value)}
          className = {clase}
          welcome= {welcomeMsg}/> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
