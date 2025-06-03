import {Linkedin, Instagram, Facebook} from "lucide-react";
function Footer() {
    return (
       <footer className="bg-navy-blue text-white">
        <h1><span>Event</span><span>Hive</span></h1>
        <form>
            <input type="email" placeholder="Enter your email" name="email" />
            <button type="submit">Subscibe</button>
        </form>
        <div>
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Get In Touch</span>
            <span>FAQs</span>
        </div>
        <hr />
        <div>
            <div>
                <button>English</button>
                <button>French</button>
                <button>Hindi</button>
            </div>
            <div>
               <Linkedin />
               <Instagram />
               <Facebook />
            </div>
            <div>
                <p>Non Copyrighted©</p>
            </div>
        </div>
       </footer> 
    
    );
}

export default Footer;