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
            <form className="col-md-10 d-flex justify-content-center">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email"></input>
                </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Please Enter Your Message Here..."></input>
                    </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                        {/* <div className="card mx-auto" style="max-width: 600px;">
                    <div className="row no-gutters bg-light">
                        <div className="col">
                            <div className="card-body">
                                <div className="form-group row">
                                    <label for="inputEmail3" className="col-4 col-form-label d-flex justify-content-end font-weight-bold">Your E-mail</label>
                                    <div className="col">
                                        <input type="email" className="form-control col-12" id="inputEmail3" placeholder="Your email">
                                            <div className="form-group row">
                                                <label for="inputcomment" className="col-4 col-form-label d-flex justify-content-end font-weight-bold">Your Message</label>
                                                <div className="col">
                                                    <textarea name="inputcomment" id="inputcomment" className="d-flex justify-content-end col-12" placeholder="Please enter your message here..."></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </div>*/}
        </div>
                    );
                }
export default Contact;