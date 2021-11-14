import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Connection = () => {

    return ( 
     <div className="create">
       <h2>Connexion</h2>
       <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email </Form.Label>
               <Form.Control type="email" placeholder="Entrer votre email" />
               <Form.Text className="text-muted">
                   Utilise votre email d'entreprise.
               </Form.Text>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Mot de passe</Form.Label>
               <Form.Control type="password" placeholder="Entrer votre mot de passe "/>
           </Form.Group>
    
           <Button variant="primary" type="submit">
               Connexion
           </Button>
       </Form>

       <Link to="/signup">Vous n'avez pas encore créer votre compte ? Clique ici... </Link>
   </div>
    
     );
}

export default Connection;