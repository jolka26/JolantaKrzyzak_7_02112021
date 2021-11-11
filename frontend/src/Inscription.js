import { Link } from "react-router-dom";
const Inscription = () => {

    return ( 
     <div className="create">
        <h2>PAGE - INSCRIPTION(?)</h2>
            <form action="#" method="POST">
                <h1>Inscription</h1>
                
                <label><b>Prenom</b></label>
                <input type="text" placeholder="Entrer votre prenom" name="prenom" required></input>
                
                <label><b>Nom</b></label>
                <input type="text" placeholder="Entrer votre nom" name="nom" required></input>

                <label><b>Email</b></label>
                <input type="text" placeholder="Entrer votre adress email" name="email" required></input>

                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required></input>

                <button type="submit" id='submit' value='INSCRIPTION' >INSCRIPTION</button>
            </form>

            <Link to="/">Vous avez déja votre compte ? Connecte vous... </Link>
    </div> 
    
     );
}

export default Inscription;