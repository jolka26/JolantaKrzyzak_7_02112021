import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Groupomania</h1>
            <div className="links">
                <Link to="/posts">Actualités</Link>
                <Link to="/profil" >Profil </Link>
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>EXIT</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;