import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-2" to="/">
                        My SHOPIFY
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
};
export default NavBar;