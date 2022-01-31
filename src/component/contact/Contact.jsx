import './contact.scss'
import { useState, useEffect } from 'react';

export default function Contact({openMenu}) {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isButtonDisable, setIsButtonDisable] = useState(true);
    const [isbuttonClick, setButtonClicked] = useState(false);

    useEffect(() => {
        setIsButtonDisable(!(email.length > 0 && message.length > 0))
    }, [email, message])

    function submitClick(e) {
        e.preventDefault();
        setEmail('');
        setMessage('');
        setButtonClicked(true);

        setTimeout(() => {
            setButtonClicked(false);
        }, 5000)
    }

    return (
        <div className= { 'contact ' + (openMenu && 'active') } id='contact'>
            <div className="left">
                <img src="assests/shake.svg" alt="" />
            </div>
            <div className="right">
                    <h1>CONTACT</h1>
                    <form onSubmit={submitClick}>
                        <input type="text" name = "email" value={email} onChange={(e) => setEmail(e.target.value)} id="" size="59" placeholder = 'Email'/>
                        <textarea name="" id="" cols="60" rows="10" placeholder = 'Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <input type="submit" value="Submit" disabled= {isButtonDisable} className='submit'/>
                        {isbuttonClick && <p>Thank You For Your Message!!!, Will Reply You ASAP</p>}
                    </form>
                </div>
        </div>
    )
}
