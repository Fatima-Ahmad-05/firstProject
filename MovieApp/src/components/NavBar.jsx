
import {Link} from "react-router-dom";

function NavBar(){
    return(

<nav>

<div className="navBar-brand">
    <Link to="/" > MovieApp</Link>
</div>
<div className="navBar-links">
<Link to="/favourites" className="nav-link"> Favourites</Link>
<Link to="/" className="nav-link">Home </Link>
<Link to="/pixar" className="nav-link">Pixar </Link>
<Link to="/disney" className="nav-link">Disney </Link>
<Link to="/dreamworks" className="nav-link">Dreamworks </Link>
</div>
</nav>

    );
}



export default NavBar;