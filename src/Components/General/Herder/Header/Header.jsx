import "./Header.css"

import Menu from "../Menu/Menu"

const Header = () => {
    return (
        <header className="header-main">
            <div className="header-main-container">
                <img className="header-main-logo" src="https://www.thenorthface.com.pe/media/logo/stores/36/TNF-Logo-No-R_Regular-2018_BLACK.png" alt="logo" />
                <Menu />
            </div>
        </header>
    )
}

export default Header;