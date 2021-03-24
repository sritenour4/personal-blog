import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <nav className="nav justify-content-center bg-white shadow p-3 mb-2">
            <NavLink exact className="py-2 mx-5" activeClassName="text-muted border-top border-bottom border-dark" to="/">Home</NavLink>
            <NavLink className="py-2 mx-5" activeClassName="text-muted border-top border-bottom border-dark" to="/compose">Compose</NavLink>
        </nav>
    );
}

interface NavBarProps {}

export default NavBar;