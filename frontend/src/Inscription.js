import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Inscription = () => {

    return ( 
     <div className="create log">
       <h2>Inscription</h2>
        
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

           <Form.Group className="mb-3" controlId="formBasicPrenom">
               <Form.Label>Prénom </Form.Label>
               <Form.Control type="prenom" placeholder="Entrer votre prénom" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicNom">
               <Form.Label>Nom </Form.Label>
               <Form.Control type="nom" placeholder="Entrer votre nom" />
           </Form.Group>
    
           <Button type="submit">
               Inscription
           </Button>
       </Form>

            <p>Vous avez déja votre compte ?</p>
            <Link to="/"> Connexion ici...</Link>
    </div> 
    
     );
}

export default Inscription;



    /* <form action="#" method="POST">
          
                
                <label><b>Prenom</b></label>
                <input type="text" placeholder="Entrer votre prenom" name="firstname" required></input>
                
                <label><b>Nom</b></label>
                <input type="text" placeholder="Entrer votre nom" name="lastname" required></input>

                <label><b>Email</b></label>
                <input type="text" placeholder="Entrer votre adress email" name="email" required></input>

                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required></input>

                <button type="submit" id='submit' value='INSCRIPTION' >INSCRIPTION</button>
            </form> */