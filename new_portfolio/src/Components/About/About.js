
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
                    <th className='services_row'>
                        <div className="icon"></div>
                        <h3></h3>
                        <p></p>
                    </th>
                    <th className='services_row'>
                        <div className="icon"></div>
                        <h3></h3>
                        <p></p>
                    </th>
                </tr>
                <tr className='services_col'>
                    <th className='services_row'>
                        <div className="icon"></div>
                        <h3></h3>
                        <p></p>
                    </th>
                    <th className='services_row'>
                        <div className="icon"></div>
                        <h3></h3>
                        <p></p>
                    </th>
                </tr>
            </table>
        </div>
        <div className="pricing_info">
            <h1>Pricing</h1>
            <div className="circle3"></div>
            <table>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    </section>
  );
}

export default About;