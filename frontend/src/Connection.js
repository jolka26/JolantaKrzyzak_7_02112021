import { Link } from "react-router-dom";
const Connection = () => {

    return ( 
     <div className="create">
        <h2>PAGE - CONNECTION (?)</h2>
            <form action="#" method="POST">
                <h1>Connexion</h1>
                
                <label><b>Email</b></label>
                <input type="text" placeholder="Entrer votre adress email" name="email" required></input>

                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required></input>

                <button type="submit" id='submit' value='LOGIN' >LOGIN</button>
            </form>
            
            <Link to="/inscription">Vous n'avez pas encore créer votre compte ? Clique ici... </Link>
    </div> 
    
     );
}

export default Connection;