import { FaBriefcase,FaUniversity,FaPaintBrush,FaLanguage,FaTerminal,FaList,FaAngleRight} from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
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
                    <tr className="Resume_head Skilss_head"><span className="resume_icon skills_icon"><FaPaintBrush/></span> Design</tr>
                    <tr>
                        <span className='skil'>Web Design</span>
                        <div className="progress">
                            <div className="progress_line line_frist"></div>
                        </div>
                    </tr>
                    <tr>
                        <span className='skil'>Write Music</span>
                        <div className="progress">
                            <div className="progress_line line_second"></div>
                        </div>
                    </tr>
                    <tr>
                        <span className='skil'>Photoshop</span>
                        <div className="progress">
                            <div className="progress_line line_third"></div>
                        </div>
                    </tr>
                    <tr>
                        <span className='skil'>Graphic Design</span>
                        <div className="progress">
                            <div className="progress_line line_fourth"></div>
                        </div>
                    </tr>
                </th>
                <th>
                    <tr className="Resume_head Skilss_head"><span className="resume_icon skills_icon"><FaLanguage/></span>Languages</tr>
                    <tr>
                        <span className="skil">English</span>
                        <div className="progress_circle">
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}} ></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                        </div>
                    </tr>
                    <tr>
                        <span className="skil">German</span>
                        <div className="progress_circle">
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                        </div>
                    </tr>
                    <tr>
                        <span className="skil">Italian</span>
                        <div className="progress_circle">
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                        </div>
                    </tr>
                    <tr>
                        <span className="skil">French</span>
                        <div className="progress_circle">
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#ff9800"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                            <span className="progress_circ" style={{backgroundColor:"#7e7e89", opacity:"0.3"}}></span>
                        </div>
                    </tr>
                </th>
            </table>
            <table>
                <th>
                    <tr className="Resume_head Skilss_head"><span className="resume_icon skills_icon"><FaTerminal/></span><span>CODING</span></tr>
                    <th>
                        <tr className='box'>
                        <div className="percent">
                            <svg>
                                <circle cx="40" cy="40" r="40"></circle>
                                <circle cx="40" cy="40" r="40"></circle>
                            </svg>
                            <div className="number">
                                <h2>90<span>%</span></h2>
                            </div>
                        </div>
                        <h2 className="text">WordPress</h2>
                         </tr>
                        <tr className='box'>
                            <div className="percent">
                                <svg>
                                    <circle cx="40" cy="40" r="40"></circle>
                                    <circle cx="40" cy="40" r="40"></circle>
                                </svg>
                                <div className="number">
                                    <h2>85<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="text">PHP / MYSQL</h2>
                        </tr>
                    </th>
                    <th>
                        <tr className='box'>
                            <div className="percent">
                                <svg>
                                    <circle cx="40" cy="40" r="40"></circle>
                                    <circle cx="40" cy="40" r="40"></circle>
                                </svg>
                                <div className="number">
                                    <h2>75<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="text" style={{lineHeight:"1.3rem",marginLeft:"-2.6rem"}}>Angular / JavaScript</h2>
                        </tr>
                        <tr className='box'>
                            <div className="percent">
                                <svg style={{marginLeft:"-3.5rem"}} >
                                    <circle cx="40" cy="40" r="40"></circle>
                                    <circle cx="40" cy="40" r="40"></circle>
                                </svg>
                                <div style={{marginLeft:"-3.5rem"}} className="number">
                                    <h2>95<span>%</span></h2>
                                </div>
                            </div>
                            <h2 style={{marginLeft:"-7rem"}} className="text">HTML / CSS</h2>
                        </tr>
                    </th>
                </th>
                <th>
                    <tr className="Resume_head Skilss_head"><span className="resume_icon skills_icon"><FaList/></span><span>KNOWLEDGE</span></tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">Website hosting</span>
                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">iOS and android apps</span>
                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">Create logo design</span>
                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">Design for print</span>
                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">Modern and mobile-ready</span>

                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">Advertising services include</span>
                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className="Knowlodge_text">Graphics and animations</span>
                    </tr>
                    <tr>
                        <BsCheck className='Knowledge_icon'/>
                        <span className='Knowlodge_text'>Search engine marketing</span>
                    </tr>
                </th>
            </table>
        </div>
        <div className="Quote">
            <div className="title"><h1 className='About_Me'><span style={{color:"#FF9800"}}>Q</span>uote</h1></div>
            <div className="circle"></div>
            <div className="myCarousel">
            <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/testi2-184x184.jpg" />
                <h3>Daniel Keystone</h3>
                <h4>Designer</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum <br />
                    dolor sit amet, consectetur adipiscing elit.
                </p>
          </div>
        </div>
    </section>
  );
}

export default Resume;