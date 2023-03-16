import './help.css';

function Help() {
    return (
        <div className="help-container">
            {/* <!--Section: Contact v.2--> */}
            <section className="mb-4">

                {/* <!--Section heading--> */}
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                {/* <!--Section description--> */}
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="name" className="name-lable">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control"/>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label htmlFor="email" className="email-label">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control"/>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label htmlFor="subject" className="subject-label">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label htmlFor="message" className="message-label">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-primary">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li className=''><i className="bi bi-geo-alt-fill fa-2x"></i>
                                <p>CSE AITR indore, India</p>
                            </li>

                            <li className=''><i className="bi bi-telephone-fill fa-2x"></i>
                                <p>+91-8103520450</p>
                            </li>

                            <li className=''><i className="bi bi-envelope-fill fa-2x"></i>
                                <p>satyamgautam020@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                </div>

            </section>
            {/* <!--Section: Contact v.2--> */}
        </div>
    );
}


export default Help;