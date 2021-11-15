import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="container">
           <h1>Bienvenue sur le Groupomania!!</h1>
           <p>
               <Link to="/login">Connectez-vous</Link> au réseau social de Groupomania ! <br />
               <br />
               Si vous n'avez pas encore de compte,
               <Link to="/signup"> inscrivez-vous ici</Link> !</p>
       </div>
     );
}
 
export default Home;