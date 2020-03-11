import React from "react"

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg text-light bg-dark">
            <div className="collapse navbar-collapse" id="navBar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Start Bootstrap</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#head2">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacts">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar