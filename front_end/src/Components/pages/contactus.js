
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Content from "../sections/about/content";

function Contactus() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bpdiz45', 'template_gt72yw6', form.current, 'NhvSo3JHMnfTap8qT')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Send Email Success",
                    text: "Your Send Email has been added successfully!",
                });
                console.log('message sent');
            }, (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Send Email Failed",
                    text: "An error occurred while sending the email.",
                });
                console.log(error.text);
            });
    };


  return (
<>
    
      {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
      </form> */}

          <div  className="wt-replaybox">
              <h1 style={{color:'white'}}>Contact Us</h1>
              <form ref={form} onSubmit={sendEmail} className="wt-formtheme wt-formleavecomment">
                  <fieldset>
                      <div className="form-group">
                          <input type="text" name="user_name" className="form-control" placeholder="Name*"/>
                      </div>
                      <div className="form-group">
                          <input type="email" name="user_email" className="form-control" placeholder="Email*"/>
                      </div>
                      <div className="form-group">
                          <input type="text" name="Phone" className="form-control" placeholder="Phone"/>
                      </div>
                      <div className="form-group">
                          <input type="text" name="Subject" className="form-control" placeholder="Subject*"/>
                      </div>
                      <div className="form-group">
                          <textarea name="message" className="form-control" placeholder="Message*"></textarea>
                      </div>
                      <div className="form-group">
                          <input className="wt-btn" type="submit" value="Send" />
                          {/* <button className="wt-btn" type="submit" value="Send">Send</button> */}
                      </div>
                  </fieldset>
              </form>
          </div>
         
      </>
  )
}

export default Contactus