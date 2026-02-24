import React, { useState } from "react";
//import axios from "axios";

const ContactUs = () => {

     const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
    //   await axios.post("http://localhost:5000/send-email", formData);
      alert("Message sent successfully!", formData);
    } catch (error) {
      alert("Error sending message.");
    }
  };
    return (
        <section className="contact-section" id="contact">
            <div
                className="modal fade"
                id="contactModal"
                tabIndex="-1"
                aria-labelledby="contactModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content contact-form">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactModalLabel">Contact Us</h5>
                            {/* Close icon */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-content">
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Your Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Email</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone Number</label>
                                        <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Message</label>
                                        <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ContactUs;