import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                
                <div className="contact_first_container">
                    <h1>JOIN THE LIST AND GET 10% <br/>OFF YOUR FIRST ORDER</h1>
                    <p id="small_text">Be the first to know about new arrivals, special <br/>events, and more.</p>

                    <p id="first_name_text">First Name</p>
                    <input id="first_name_field"/>
                    <p id="last_name_text">Last Name</p>
                    <input id="last_name_field"/>
                    <p id="email_text">Email</p>
                    <input id="email_field"/>
                    <div className="contact_send_btn">send</div>
                </div>

               
               

            </div>
        );
    }
}

export default Contact;