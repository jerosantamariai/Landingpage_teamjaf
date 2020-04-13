import React from "react"

const Header = () => {
    return (
        <div className="container-fluid " id="header">
            <div className="row d-flex justify-content-center p-4 rounded">
                <div className="col-8 p-4 mx-2">
                    <h1 className="display-1"><strong> One Page Wonder </strong></h1>

                </div>
            </div>
            <div className="row">
                <div id="separator">
                

                </div> 
            </div> 
            <div className="row" >   
                <div className="col-12 d-flex justify-content-center">
                    <h3 className="display-4" > <strong>Will Knock your socks off</strong></h3>
                </div>
            </div>
        </div>
    )
}

export default Header