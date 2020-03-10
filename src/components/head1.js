import React from 'react';

const Head1 = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 p-5">
                    <h2>The irst Heading <span style="color: grey;">Will Catch Your Eye</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error ut magnam temporibus.
                    Asperiores dignissimos repellendus error voluptas, obcaecati molestiae suscipit modi illo sed
                    aspernatur. Labore eius nulla sequi harum.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="../public/assets/img/1.jpg" alt="Breaking Bad Image" style="border-radius: 50%;width: 100%;" />
                </div>
            </div>
        </div>
    )
}
export default Head1