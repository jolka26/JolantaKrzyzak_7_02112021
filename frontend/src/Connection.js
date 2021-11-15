import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';


const Connection = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isPanding, setIsPanding] = useState(false);
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        const connection = { email, password };

        // setIsPanding(true);
       
        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: { 'Content-Type' : "application/json"},
            body: JSON.stringify(connection)
        })
        .then(res => res.json())
        .then((result) => {
            localStorage.setItem('token', JSON.stringify(result));
            let storage = JSON.parse(localStorage.getItem('token'));
            if(storage.token === undefined) {
                
                alert ("Utilisateur non identifié. Tentez de vous connecter à nouveau !");
                console.log(storage);
            } else {
                console.log("ok");
                history.push('/posts');
                return storage;
              
               
            }
        })
        .catch((err) => {
            console.log("ERROR");
        })
    };
        // .then(() => {
        //     console.log("connection");
        //     // setIsPanding(false);

        // // history.go(1);
        //     // history.push('/posts');
        // })
        // .catch((err) => 
        // console.log("ERROR"));
        // fetch('http://localhost:5000/users/login', {
        //     method: "post",
        //     headers: {"Content-type" : 'aplication/json'},
        //     data: JSON.stringify({
        //         email: email.value,
        //         password: password.value
        //     })
        // })
        // .then(res => res.json())
        // .then((token) => {
        //     localStorage.setItem('token', JSON.stringify(token));
        //     let storage = JSON.parse(localStorage.getItem('token'));
        //     if(storage.token === undefined) {
                
        //         alert ("Utilisateur non identifié. Tentez de vous connecter à nouveau !");
        //         console.log(storage);
        //     }
        // })
        // .catch((err) => 
        // console.log("ERROR"));
 
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
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Mot de passe</Form.Label>
               <Form.Control 
                type="password" 
                placeholder="Entrer votre mot de passe "
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
               />
           </Form.Group>
    
           <Button variant="primary" type="submit">
               Connexion
           </Button>
        
       </Form>

        <p>Vous n'avez pas encore créer votre compte ?</p>
       <Link to="/signup"> Inscription ici...  </Link>
   </div>
    
     );
}

export default Connection;

// { !isPanding && <p> </p> }
// { isPanding && <p>conection ...</p> }