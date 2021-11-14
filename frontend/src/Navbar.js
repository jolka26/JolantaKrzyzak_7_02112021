import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Image src="images/icon.png" className="logo"/>
            <h2>Groupomania</h2>
            <div className="links">
                <Link to="/posts">Actualités</Link>
                <Link to="/users" >Profil </Link>
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}><Image src="images/exit.png" className="exit"/> </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;