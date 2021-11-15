import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
require('dotenv').config();

const Connection = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');

 
        // .then((res) => {
        //     if(res.data.errors) {
        //         emailError.innerHTML = <p>Error email</p>;
        //         passwordError.innerHTML = <p>Error password</p>;
        //     }else {
        //         window.location = "/";
        //     }

        // })
        // .catch((err) => { 
        //     console.log(err);
        // });
    };


    return ( 
     <div className="create log">
       <h2>Connexion</h2>
       <Form action="" onSubmit={handleLogin}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email </Form.Label>
               <Form.Control 
                type="email" 
                placeholder="Entrer votre email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
               />
               <Form.Text className="text-muted">
                   Utilise votre email d'entreprise.
               </Form.Text>
               <div className="email error"> </div>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Mot de passe</Form.Label>
               <Form.Control 
                type="password" 
                placeholder="Entrer votre mot de passe "
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
               />
               <div className="password error"> </div>
           </Form.Group>
    
           <Button variant="primary" type="submit">
               Connexion
           </Button>
       </Form>

        <p>Vous n'avez pas encore créer votre compte ?</p>
       <Link to="/signup"> Inscription ici... </Link>
   </div>
    
     );
}

export default Connection;