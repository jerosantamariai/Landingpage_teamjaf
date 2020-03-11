import React from "react";
const Portfolio = (props) => {
    return (
        <div className="container mb-4 " id="portfolio ">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="col-10">
                        <h1>Portfolio</h1>
                        <p>Aqui venia algo que debio haber sido escrito con Lorem Ipsum, pero no quizo funcionar, y por lo tanto, escribi lo primero que se me ocurrio. Saludos!</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="col-4">
                            <div className="card">
                                <img src="https://picsum.photos/700/400" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src="https://picsum.photos/700/400" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src="https://picsum.photos/700/400" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Portfolio;