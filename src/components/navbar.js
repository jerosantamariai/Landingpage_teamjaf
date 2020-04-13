import React from "react"

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="col-3 offset-1">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-4 offset-4">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#head1">Head1</a>
                        <a className="nav-item nav-link" href="#head2">Head2</a>
                        <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
                        <a className="nav-item nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div >
        </nav >
    )
}

export default Navbar