import { FaBriefcase,FaUniversity,FaPaintBrush,FaLanguage,FaTerminal,FaList,FaAngleRight } from 'react-icons/fa';
import './Resume.css';

function Resume() {
  return (
    <section className='Resume'>
        <div className="resume_info">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>R</span>esume</h1></div>
            <div className="circle"></div>
            <table>
                <th>
                    <tr className='Resume_head' ><span className="resume_icon"><FaBriefcase/></span> Experience</tr>
                    <tr>
                        <div className="date"><span>2013-present</span></div>
                        <div className="table_head">
                            <h3>Art Director</h3>
                            <span>Envato Inc.</span>
                            <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand3_w.png"/>
                        </div>
                        <p>Collaborate with creative <br /> and development teams on <br /> the execution of ideas.</p>
                    </tr>
                    <tr>
                        <div className="date"><span>2013-present</span></div>
                        <div className="table_head">
                            <h3>Front-End Developer</h3>
                            <span>Google Inc.</span>
                            <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand3.png"/>
                        </div>
                        <p>Monitored technical aspects <br /> of the front-end delivery for <br /> projects.</p>
                    </tr>
                    <tr>
                        <div className="date"><span>2009 - 2010</span></div>
                        <div className="table_head">
                            <h3>Senior Developer</h3>
                            <span>Upwork Inc.</span>
                            <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/brand2_w.png"/>
                        </div>
                        <p>Optimize your website and <br /> apps performance using <br /> latest technology.</p>
                    </tr>
                </th>
                <th>
                    <tr className='Resume_head'><span className="resume_icon"><FaUniversity style={{display:"flex",marginTop:"0.5rem",marginLeft:"0.5rem"}} /></span> Education</tr>
                    <tr>
                        <div className="date"><span>2006 - 2008</span></div>
                        <div className="table_head">
                            <h3>Art University</h3>
                            <span>New York</span>
                            <img src=""/>
                        </div>
                        <p>Bachelor's Degree in Computer <br /> Science ABC Technical Institute, <br /> Jefferson, Missouri.</p>
                        <a href="" className='Certificate'>Certificate<FaAngleRight style={{display:"flex",marginTop:"0.5rem",marginLeft:"0.5rem"}} /></a>
                    </tr>
                    <tr>
                        <div className="date"><span>2005 - 2006</span></div>
                        <div className="table_head">
                            <h3>Programming Course <br /><span>Paris</span></h3>
                            <img src=""/>
                        </div>
                        <p>Coursework - Git, WordPress, <br /> Javascript, iOS, Android.</p>
                        <a href="" className='Certificate'>Certificate<FaAngleRight style={{display:"flex",marginTop:"0.5rem",marginLeft:"0.5rem"}} /></a>
                    </tr>
                    <tr>
                        <div className="date"><span>2004 - 2005</span></div>
                        <div className="table_head">
                            <h3>Web Design Course <br /><span>London</span></h3>
                            <img src=""/>
                        </div>
                        <p>Converted Photoshop layouts to <br /> web pages using HTML, CSS, and <br /> JavaScript.</p>
                        <a href="" className='Certificate'>Certificate <FaAngleRight style={{display:"flex",marginTop:"0.5rem",marginLeft:"0.5rem"}} /></a>
                    </tr>
                </th>
            </table>
        </div>
        <div className="Skilss">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>S</span>kills</h1></div>
            <div className="circle"></div>
            <table>
                <th>
                    <tr><FaPaintBrush/></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </th>
                <th>
                    <tr><FaLanguage/></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </th>
            </table>
            <table>
                <th>
                    <tr><FaTerminal/></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </th>
                <th>
                    <tr><FaList/></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </th>
            </table>
        </div>
        <div className="Quote"></div>
    </section>
  );
}

export default Resume;