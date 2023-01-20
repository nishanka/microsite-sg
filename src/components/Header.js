import React from "react";
import "../styles/header.css";

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"container"}>
                <a href={"/"} className={"header__logo"}>Logo</a>
            </div>
        </header>
    );
}

export default Header;