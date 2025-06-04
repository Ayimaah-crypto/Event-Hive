import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
// import EventCard from "../components/EventCard";

export default function () {
    return (
        <>
            <Navbar />
            <section className="bg-[url(./assets/images/image.png)] h-[586px] bg-cover w-[95%] mx-auto relative">
                <h1 className="text-white text-big-heading  text-center w-[30%] mx-auto pt-32">MADE FOR THOSE WHO DO</h1>
                <form className="bg-navy-blue text-white w-[90%] mx-auto py-6 px-10 flex flex-row justify-between  absolute -bottom-8 left-[5%]" >
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md text-black ">
                            <option selected disabled>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>

                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="location" className="text-white">Looking for</label>
                        <select name="location" id="type" className="bg-white p-2 rounded-md text-black ">
                            <option selected disabled>Choose location</option>
                            <option value="drama">Accra</option>
                            <option value="tech">Kumasi</option>
                        </select>

                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label className="" htmlFor="When">when</label>
                        <input type="datetime-local" name="when" id="when" className="rounded-md text-black bg-white p-2 rounded-b-lg" />
                        {/* <select name="when" id="when" className="bg-white p-2 rounded-md text-black ">
                            <option selected disabled>Choose date and time</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                            
                        </select> */}
                         
                    </div>
                    <div className="bg-primary text-white size-[60px] flex flex-row justify-center items-center rounded-md">
                                <Search/>
                            </div>
                </form>
            </section>
            <section>
                <div>
                    <h1>upcoming <span>event</span> </h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {[1,2,3,4,5,6].map(n => <EventCard key={n}/>)}
                </div>
            </section>
            <section className="h-[500px]"></section>

            <Footer />
        </>
    );

}