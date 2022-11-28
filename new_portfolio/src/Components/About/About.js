import { FaCode,FaMusic,FaBullhorn,FaGamepad, FaAngleRight, FaRocket, FaCrown } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id='About'>
        <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>A</span>bout Me</h1></div>
        <div className="circle"></div>
        <div className="about_info">
            <h2>Hello! I’m Ryan Adlard.</h2>
            <p>Web designer from USA, California. I have rich experience in web site design and 
                <br /> building, also I am good at wordpress. I love to talk with you about our unique.
            </p>
            <table>
                <th>
                    <tr>AGE:<span> . . . .  24</span></tr>
                     <tr>FREELANCE:<span> . . . .  Available</span></tr>
                </th>
                <th className="second_col">
                    <tr>RESIDANCE:<span> . . . . USA</span></tr>
                    <tr>ADDRESS:<span> . . . .  California, USA</span></tr>
                </th>
            </table>
        </div>
        <div className="services_info">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>M</span>y Services</h1></div>
            <div className="circle2"></div>
            <table>
                <tr className='services_col'>
                    <th className='services_row line bottom'>
                        <div className="icon"><FaCode/></div>
                        <div className="services_circle"></div>
                        <h3>Web Development</h3>
                        <p>Modern and mobile-ready website <br/>
                            that will help you reach all of your <br/>marketing.</p>
                    </th>
                    <th className='services_row bottom'>
                        <div className="icon"><FaMusic/></div>
                        <div className="services_circle"></div>
                        <h3>Music Writing</h3>
                        <p>Music copying, writing, creating, <br/> transcription, arranging and <br/> composition services.</p>
                    </th>
                </tr>
                <tr className='services_col'>
                    <th className='services_row line'>
                        <div className="icon"><FaBullhorn/></div>
                        <div className="services_circle"></div>
                        <h3>Advetising</h3>
                        <p>Advertising services include <br/> television, radio, print, mail, and web <br/> apps.</p>
                    </th>
                    <th className='services_row'>
                        <div className="icon"><FaGamepad/></div>
                        <div className="services_circle"></div>
                        <h3>Game Development</h3>
                        <p>Developing memorable and unique <br /> mobile android, ios and video <br /> games.</p>
                    </th>
                </tr>
            </table>
        </div>
        <div className="pricing_info">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>P</span>ricing</h1></div>
            <div className="circle3"></div>
            <table>
                <tr>
                    <th className='priceTable_th '>
                        <div className="icon"><FaRocket/></div>
                        <h2>Popular</h2>
                        <div className="price"><span className="$"></span>48 <span>hour</span></div>
                        <div className="price_info">
                            <h4>Web Development</h4>
                            <h4>Advetising</h4>
                            <h4>Game Development</h4>
                            <h4>Music Writing <strong>new</strong></h4>
                            <h4>Photography <strong>new</strong></h4>
                        </div>
                        <a href="">ORDER NOW <FaAngleRight/></a>
                    </th>
                    <th className='priceTable_th'>
                        <div className="icon"><FaCrown/></div>
                        <h2>Premium</h2>
                        <div className="price"><span className="$"></span>48 <span>hour</span></div>
                        <div className="price_info">
                            <h4>Web Development</h4>
                            <h4>Advetising</h4>
                            <h4>Game Development</h4>
                            <h4>Music Writing <strong>new</strong></h4>
                            <h4>Photography <strong>new</strong></h4>
                        </div>
                        <a href="">ORDER NOW <FaAngleRight/></a>
                    </th>
                </tr>
            </table>
        </div>
    </section>
  );
}

export default About;