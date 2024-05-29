import React, {useEffect} from "react";
import "./main.css";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10,jpg.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboard } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Paris",
        location: "France",
        grade: "CITY ",
        fees: "$2000",
        description: "France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes, trendy shopping districts and Haussmann architecture give Paris its timeless beauty. But the city's best asset is that you're likely to discover something new with each trip or season."
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "Bora Bora",
        location: "New Zealand",
        grade: "CULTURAL RELAX ",
        fees: "$8000",
        description: " Here, you'll find picturesque beaches, lush jungles and luxurious resorts set on surrounding islets. The island's extinct volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion."
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Rome",
        location: "Italy",
        grade: "CITY ",
        fees: "$3000",
        description: "When you visit Italy's capital city, prepare to cross a few must-see landmarks including the Colosseum, the Trevi Fountain and the Pantheon off of your bucket list. Travelers can also see some of Italy's greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City."
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: "Swiss Alps",
        location: "Switzerland",
        grade: "MOUNTAINS ",
        fees: "$4000",
        description: "Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy tale destination. Visit in the winter for world-class skiing in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park or attend lively festivals in the foothill city of Montreux."
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: "Maui",
        location: "Hawaiian",
        grade: "BEACH ",
        fees: "$3500",
        description: "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination."
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: "London",
        location: "England",
        grade: "STATE ",
        fees: "$4000",
        description: "The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast."
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: "MALDIVES",
        location: "ASIA",
        grade: "COUNTRY ",
        fees: "$3000",
        description: "It is not cheap or easy to reach, but this isolated Indian Ocean vacation spot located southwest of India is the personification of a dreamy tropical retreat. In this remote destination, which is made up of more than 1,000 islands, thatched-roof overwater bungalows sit above the bright aquamarine sea, providing easy water access and a romantic atmosphere."
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: "Turks & Caicos",
        location: "Dominican Republic",
        grade: "CITY ",
        fees: "$7000",
        description: "Located north of the Dominican Republic, this collection of roughly 100 islands and cays is popular with honeymooners – and for good reason. With sparkling white sand, crystal-clear water and nearly 350 miles of colorful coral reef, the Turks and Caicos Islands are truly a sight to behold."
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: "Tokyo",
        location: "Japan",
        grade: "CITY ",
        fees: "$5000",
        description: "Simply setting foot in Japan's frenetic capital city is an experience. Known for its bustling streets and flashing neon signs, Tokyo has an electric energy and ample top attractions to discover."
    },

    {
        id: 10,
        imgSrc: img10,
        destTitle: "Costa Rica",
        location: "North America",
        grade: "COUNTRY ",
        fees: "$4000",
        description: "rom volcanic mountains and verdant rainforests to tumbling waterfalls and miles of stunning shoreline, Costa Rica is a Central American gem. Explore the beaches along the Nicoya Peninsula, hike along Arenal Volcano and spot exotic wildlife in remote Tortuguero National Park."
    },

]

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

    // data-aos="fade-up"
    // import React, {useEffect} from "react";
    // import Aos from 'aos'
    // import 'aos/dist/aos.css';  


    return (
        
        <section className="main container section"> 
            <div className="secTitle">
                <h3 data-aos="fade-right"
                className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">


                {
                    Data.map(({id,  imgSrc, destTitle, location, grade, fees, description })=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                
                                <div className="imageDiv">
                                     <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>


                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    Details <HiOutlineClipboard className="icon" />
                                </button>
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        </section>
    );
};

export default Main;