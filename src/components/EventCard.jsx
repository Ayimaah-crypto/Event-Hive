import eventCardImage from "../assets/images/event-card.jpg";

export default function EventCard() {
    return (
        <div>
            <img src={eventCardImage} alt="Event Card" />
            <h1>Bestseller Book Bootcamp -write, Market and publish your book -Lucknow</h1>
            <h2>Suturday, March 18, 9:30pm</h2>
            <h3>Online Event - Attend anywhere</h3>
        </div>
    )
}