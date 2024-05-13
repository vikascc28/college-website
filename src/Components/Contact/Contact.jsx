import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "633d512e-c870-49b3-ab56-84a4893245b1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact">
                <h3>Send us a message <img src={msg_icon} alt='' /></h3>
                <p>Feel free to reach out through Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit non, reiciendis optio aspernatur ullam vitae sapiente, consequuntur voluptatem quibusdam voluptas et praesentium maxime illum doloribus tenetur nesciunt. Quod, sed perferendis.</p>
                <ul>
                    <li><img src={mail_icon} alt='' />contact@edusity.com</li>
                    <li><img src={phone_icon} alt='' />+91-5231491228</li>
                    <li><img src={location_icon} alt='' />55A, Ashok Nagar<br />Prayagraj, 211011</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='enter your name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='enter your mobile number' required />
                    <label>Email</label>
                    <input type="email" name='email' placeholder='enter your email' required />
                    <label>Write your message here</label>
                    <textarea name='message' rows="6" placeholder='enter your message'></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt='' /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact