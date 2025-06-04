import {Linkedin, Instagram, Facebook} from "lucide-react";
function Footer() {
    return (
       <footer className="bg-navy-blue text-white  ">
        <h1 className="text-center text-3xl font-bold pt-5"><span>Event</span><span className="text-purple-600 pl-3">Hive</span></h1>
        <form className="text-center mt-6 space-x-3 pt-3">
            <input className="bg-white border rounded text-black p-2 text-center" type="email" placeholder="Enter your email" name="email" />
            <button className="bg-purple-600  border rounded p-2 border-purple-600" type="submit">Subscibe</button>
        </form>
        <div className="text-center mt-10 p-4 space-x-6 pb-10">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Get In Touch</span>
            <span>FAQs</span>
        </div>
        <hr className="pb-6 flex justify-around text-purple-600 mx-6" />
        <div className="flex flex-row justify-between">
            <div className="ml-3 space-x-5">
                <button>English</button>
                <button>French</button>
                <button>Hindi</button>
            </div>
            <div className="flex flex-row space-x-5"> 
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