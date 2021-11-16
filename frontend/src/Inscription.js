import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link , useHistory} from "react-router-dom";
import { useState } from 'react';

const Inscription = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [firstname, setPrenom] = useState("");
    const [lastname, setNom] = useState("");
    const history = useHistory();

    const handleSignup = (e) => {
        e.preventDefault();

        const inscription = { email, password, firstname, lastname  }

        fetch('http://localhost:5000/users/signup/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inscription)
        })
            .then(response => response.json())
            .then((result) => {
                // localStorage.setItem('token', JSON.stringify(result));
                // let storage=  JSON.parse(localStorage.getItem('token'));
                if (result.error) { 
                    alert("Erreur : Il y a eu une erreur"); 
                    
                } else { 
                    alert("Votre compte à bien été créé ! Connectez-vous pour accéder aux derniers échanges.")
                    return history.push('/posts');
                   
                  
                    
                    
                    
                }
            })
            .catch(error => {
                alert("Veuillez remplir l'ensemble des champs demandés !")
                
                console.error('Il y a eu une erreur :', error);
            });
}
    

    return ( 
     <div className="create log">
       <h2>Inscription</h2>
        <Form action="" onSubmit={handleSignup}>
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

           <Form.Group className="mb-3" controlId="formBasicPrenom">
               <Form.Label>Prénom </Form.Label>
               <Form.Control 
               type="firstname" 
               placeholder="Entrer votre prénom"
               onChange={(e) => setPrenom(e.target.value)} 
                value={firstname}
                 />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicNom">
               <Form.Label>Nom </Form.Label>
               <Form.Control 
               type="lastname" 
               placeholder="Entrer votre nom" 
               onChange={(e) => setNom(e.target.value)} 
                value={lastname}
               />
           </Form.Group>
    
           <Button type="submit">
               Inscription
           </Button>
       </Form>

            <p>Vous avez déja votre compte ?</p>
            <Link to="/login"> Connexion ici...</Link>
    </div> 
    
     );
}

export default Inscription;
