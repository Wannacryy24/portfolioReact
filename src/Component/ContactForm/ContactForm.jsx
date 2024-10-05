import React, { useEffect, useState } from "react";
import './ContactForm.css'
export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d7c828d7-87f8-4d4e-ba8a-d67abd7b4808");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div className="contact-form">
        <p className="contact-form-outer-p">Or Fill Out This Form</p>
        <form onSubmit={onSubmit}>
            <div className="name-div">
                <p className="name-p">Full Name:</p>
                <input type="text" name="name" required placeholder="Full Name"/>
            </div> 
            <div className="email-div">
                <p>Email</p>
                <input type="email" name="email" required placeholder="abc@xyz.com"/>
            </div>
            <div className="messege-div">
                <p>Messege</p>
                <textarea name="message" required placeholder="Please Write messege"></textarea >
            </div>
            <button type="submit" className="submit-form">Submit Form</button>
        </form>
        <span >{result}</span>
      </div>
    );
  }