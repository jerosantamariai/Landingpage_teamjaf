import React from 'react';

const Head1 = (props) => {
    return (
        <div className="container" id="head1">
            <div className="row mt3">
                <div className="col-8 p-5">
                            <h2>The first Heading <span style={{color: "grey"}}>Will Catch Your Eye</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error ut magnam temporibus.
                    Asperiores dignissimos repellendus error voluptas, obcaecati molestiae suscipit modi illo sed
                    aspernatur. Labore eius nulla sequi harum.</p>
                </div>
                <div className="col-4 p-5 text-center" >
                    <img src="../public/assets/img/1.jpg" width="350px" height="350px" alt="Breaking Bad Image" className="rounded-circle"/>
                </div>
            </div>
        </div>
    )
}
export default Head1