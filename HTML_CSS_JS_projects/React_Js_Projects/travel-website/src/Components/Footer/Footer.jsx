import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./footer.css";
import video from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])

    // data-aos="fade-up"
    // import React, {useEffect} from "react";
    // import Aos from 'aos'
    // import 'aos/dist/aos.css';  
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            </div>
            
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div data-aos="fade-up" className="inputDiv flex">
                        <input type="text" placeholder="Enter email address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            Send <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdOutlineTravelExplore className="icon"/>Travel. 
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit totam laboriosam cum quis repellendus rem velit illo perferendis debitis illum quod dolores nisi eum sapiente delectus, id, corporis nesciunt minima!
                        </div>


                        <div data-aos="fade-up" className="footerSocials">
                            <FaXTwitter className="icon" />
                            <FaYoutube className="icon"/>
                            <FaInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>


                    <div className="footerLinks grid">
                        <div data-aos="fade-up" 
                        data-aos-duration="3000"
                        className="linkGroup">
                            <span className="groupTitle">
                                Our Agency
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                        </div>

                        <div data-aos="fade-up"
                        data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                Partners
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HotelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>
                        </div>

                        <div data-aos="fade-up" 
                        data-aos-duration="5000"
                        className="linkGroup">
                            <span className="groupTitle">
                                Last Minute
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Oceania
                            </li>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default Footer;