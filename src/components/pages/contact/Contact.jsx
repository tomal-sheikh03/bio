import './contact.css'

export default function Contact() {
    return (
        <div className="contact">
            <div className="contents">
                <div className="headers">
                    <h2>Direct Contact Information</h2>
                </div>
                <div className="subContent">
                    <i className="fas fa-phone-square-alt icons" id="phone"></i>
                    <i class="fab fa-whatsapp-square icons" id="whatsapp"></i>
                    <i className="fab fa-google icons" id="google"></i>
                    <i className="fab fa-apple icons" id="iCloud"></i>
                </div>
            </div>
            <div className="contents">
                <div className="headers">
                    <h2>Connect Through Social Media</h2>
                </div>
                <div className="subContent">
                    <i className="fab fa-facebook-square icons" id="facebook"></i>
                    <i className="fab fa-linkedin icons" id="linkedIn"></i>
                    <i className="fab fa-instagram-square icons" id="instagram"></i>
                </div>
            </div>
            <div id="contactDetails">
                
            </div>
        </div>
    )

    /* function contactHandler(){
        
    } */
}
