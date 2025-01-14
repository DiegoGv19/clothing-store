import { NavLink } from "react-router-dom"

import "./Menu.css"

const Menu = () => {
    return (
        <nav className="menu-main">
            <ul className="menu-list">
                <li className="menu-list-iteam"><NavLink className={"menu-list-link"} to='/'>Home</NavLink></li>
                <li className="menu-list-iteam"><NavLink className={"menu-list-link"} to='/categories'>Categories</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu