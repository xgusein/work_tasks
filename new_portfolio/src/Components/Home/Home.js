import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from  "typewriter-effect"
import { AiFillGithub,AiOutlineTwitter } from 'react-icons/ai';
import { IoSendSharp } from 'react-icons/io5'
import { BsSpotify, BsStackOverflow, BsCardList } from 'react-icons/bs';
import { FaRegFolderOpen, FaRegPaperPlane ,FaShoppingCart,FaRegNewspaper, FaOpencart, FaDribbble, FaRegUser } from 'react-icons/fa';
import { faBarsStaggered, faDownload} from '@fortawesome/free-solid-svg-icons'
import "./Home.css";


const Home = () => {
  return (
   <>
         <nav>
            <div className="menu-link">
            <ul>
                <li className='bar'>
                    <a href=""><FontAwesomeIcon className='icon_design' icon={faBarsStaggered}/></a>
                </li>
                <li className='basket'>
                    <a href=""><FaShoppingCart id="basket" className='icon_design'/><p className='text'></p></a>
                </li>
                <li className='about'>
                    <a href=""><FaRegUser style={{fontWeight:"bold"}} className='icon_design'/><p className='text'>About</p></a>
                </li>
                <li className='resume'>
                    <a href=""><BsCardList className='icon_design'/><p className='text'>Resume</p></a>
                </li>
                <li className='works'>
                    <a href=""><FaRegFolderOpen className='icon_design'/><p className='text'>Works</p></a>
                </li>
                <li className='blog'>
                    <a href=""><FaRegNewspaper className='icon_design' /><p className='text'>Blog</p></a>
                </li>
                <li className='contact'>
                    <a href=""><FaRegPaperPlane className='icon_design'/><p className='text'>Contact</p></a>
                </li>
                <li className='product'>
                    <a href=""><FaOpencart className='icon_design' /><p className='text'>Products</p></a>
                </li>
            </ul>
        </div>
    </nav>
    <header>
        <div className="header_shadow"></div>
        <div className="portfolio">
            <div className="slide">
                <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2020/04/bg-1.jpg" style={{width:"42rem", position:"absolute", marginTop:"1.9rem", marginLeft:"14rem", borderRadius:"8px", zIndex:"1"}} className='aa' alt="" />
                <svg className='wave' style={{width:"42rem", position:"absolute", top:"24.6rem", left:"14rem", zIndex:"1"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1000">
                    <path fill="#31313A" fill-opacity="1" d="M0,0L720,224L1440,32L1440,320L720,320L0,320Z"></path>
                </svg>

            </div>
            <div className="profile_photo">
                <div className="shadow" style={{color:"white", position:"absolute", top:"23rem",height:"1rem",width:"1.9rem", opacity:0.5, left:"29rem", zIndex:"1", background:"rgba(255, 152, 0, 0.4)", borderRadius:"50%", padding:"55px"}}></div>
                <div className="img">
                    <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2020/04/profile.png" alt="" />
                </div>
            </div>
            <div className="profil_info">
                <div className="inf">
                    <h1>Ryan Adlard</h1>
                    <div className="name_works">
                        {/* <p>
                            <div className="title">{state.title}</div>
                            <div className="titleTwo">{state.titleTwo}</div>
                            <div className="titleThree">{state.titleThree}</div>
                            <div className="titleFour">{state.titleFour}</div>
                        </p> */}
                        <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "Photographer",
                                "Web Design",
                                "Freelancer",
                                "Blogger"
                            ]
                        }}
                        />
                    </div>
                    <div className="social_media">
                        <a href=""><FaDribbble/></a>
                        <a href=""><AiOutlineTwitter/></a>
                        <a href=""><AiFillGithub/></a>
                        <a href=""><BsSpotify /></a>
                        <a href=""><BsStackOverflow /></a>
                    </div>
                    <div className="inf_buttons">
                        <a href=""><span>DOWNLOAD CV <FontAwesomeIcon className='span_i' icon={faDownload}/></span></a>
                        <a href=""><span>CONTACT ME <IoSendSharp className='sapn_i' /></span></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
   </>
  );
}

export default Home;