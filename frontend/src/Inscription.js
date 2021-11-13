import { Link } from "react-router-dom";
const Inscription = () => {

    return ( 
     <div className="create">
       <h1>Inscription</h1>
            <form action="#" method="POST">
            {/* <form action="/signup/create" method="POST"> */}
                
                <label><b>Prenom</b></label>
                <input type="text" placeholder="Entrer votre prenom" name="firstname" required></input>
                
                <label><b>Nom</b></label>
                <input type="text" placeholder="Entrer votre nom" name="lastname" required></input>

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