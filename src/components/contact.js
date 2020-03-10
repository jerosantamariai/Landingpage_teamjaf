import React from "react";
const Contact = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="col-10">
                        <h1>Contact</h1>
                        <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex in velit voluptas consequatur est dolorum adipisci ipsa deserunt, officiis rem qui voluptatibus aut reiciendis debitis dolor mollitia laborum impedit deleniti.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <form className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label>Your E-mail</label>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label>Your Message</label>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group">
                                        <input type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Please Enter Your Message Here..."></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;