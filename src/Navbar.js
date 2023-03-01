import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2><Link to="/">Neri<span>Thing</span>!</Link></h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/weather">Weather</Link> 
            </div>
        </nav>
     );
}
 
export default Navbar;