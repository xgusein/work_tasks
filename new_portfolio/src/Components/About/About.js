import { FaCode,FaMusic,FaBullhorn,FaGamepad, FaAngleRight, FaRocket, FaCrown, FaCompactDisc, FaAward, FaCoffee, FaFlag } from 'react-icons/fa';
import './About.css';
import Testimonials from '../TestimonialsSection';

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
                        <div className="icon2"><FaRocket/></div>
                        <h2>Popular</h2>
                        <div className="price"><span className="dollar">$</span>22 <span className='price_color'>hour</span></div>
                        <div className="price_info">
                            <h4>Web Development</h4>
                            <h4>Advetising</h4>
                            <h4>Game Development</h4>
                            <h4>Music Writing <strong>new</strong></h4>
                            <h4 style={{paddingBottom:"20px"}}>Photography <strong>new</strong></h4>
                        </div>
                        <a href="" className='order_button'>ORDER NOW <FaAngleRight className='Faicon'/></a>
                    </th>
                    <div className="ab"></div>
                    <th className='priceTable_th'>
                        <div className="icon2"><FaCrown/></div>
                        <h2>Premium</h2>
                        <div className="price"><span className="dollar">$</span>48 <span className='price_color'>hour</span></div>
                        <div className="price_info">
                            <h4>Web Development</h4>
                            <h4>Advetising</h4>
                            <h4>Game Development</h4>
                            <h4>Music Writing <strong>new</strong></h4>
                            <h4 style={{paddingBottom:"20px"}}>Photography <strong>new</strong></h4>
                        </div>
                        <a href="" className='order_button'>ORDER NOW <FaAngleRight className='Faicon'/></a>
                    </th>
                </tr>
            </table>
        </div>
        <div className="fun_facts">
        <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>F</span>un Facts</h1></div>
        <div className="circle4"></div>
        <div className="funFacts_info">
            <table className='funFacts_table'>
                <tr>
                    <th className='albums'>
                        <div className="funFacts_icon"><FaCompactDisc /></div>
                        <div className="txt">
                            <h4>80+</h4>
                            <h4>Albumes <br /> Listened</h4>
                        </div>
                    </th>
                    <th className='awards'>
                        <div className="funFacts_icon"><FaAward /></div>
                        <div className="txt">
                            <h4>15</h4>
                            <h4>Awards <br />Won</h4>
                        </div>
                    </th>
                    <th className='coffe'>
                        <div className="funFacts_icon"><FaCoffee /></div>
                        <div className="txt">
                            <h4>1000+</h4>
                            <h4>Cups Of <br /> Coffee</h4>
                        </div>
                    </th>
                    <th className='countries'>
                        <div className="funFacts_icon"><FaFlag /></div>
                        <div className="txt">
                            <h4>10</h4>
                            <h4>Countries <br /> Visited</h4>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
        </div>
        <div className="Testi">
            <div className="title Testi_title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>T</span>estimonials</h1></div>
            <div className="circle4"></div>
            <Testimonials/>
        </div>
        <div className="Clients">
        <div className="title Testi_title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>C</span>lients</h1></div>
            <div className="circle4"></div>
            <div className="links">
                <a href="">
                    <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand3-184x62.png" alt="" />
                </a>
                <a href="">
                    <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand2_w-184x62.png" alt="" />
                </a>
                <a href="">
                    <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand1_w-184x62.png" alt="" />
                </a>
                <a href="">
                    <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand3_w-184x62.png" alt="" />
                </a>
            </div>
        </div>
        <div className="Custom_text">
            <div className="title Testi_title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>C</span>ustom Text</h1></div>
            <div className="circle4"></div>
            <div className="Customtxt">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus, consequatur accusantium placeat facilis aut neque id natus architecto provident ab, fuga nesciunt, sit maxime reprehenderit dicta earum nobis quae.
                </p>
            </div>
        </div>
    </section> 
  );
}

export default About;