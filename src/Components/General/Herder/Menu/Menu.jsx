import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"

import { UserContext } from "../../../../Context/UserContext"

import "./Menu.css"

const Menu = () => {
    const user = useContext(UserContext)
    const navigation = useNavigate()

    return (
        <nav className="menu-main">
            <ul className="menu-list">
                <li className="menu-list-iteam"><NavLink className={"menu-list-link"} to='/'>Home</NavLink></li>
                <li className="menu-list-iteam"><NavLink className={"menu-list-link"} to='/categories'>Categories</NavLink></li>
                <li className="menu-list-iteam"><NavLink className={"menu-list-link"} to='/profile'>{user.name}</NavLink></li>
                <li className="menu-list-iteam"><a className={"menu-list-link"} onClick={() => {
                    localStorage.removeItem("store-login-token")
                    navigation("/login")
                }}>Logout</a></li>
            </ul>
        </nav>
    )
}

export default Menu