import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="products">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
}
