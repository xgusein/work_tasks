import React from 'react';
import './skills.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { HiServer } from 'react-icons/hi';
import { FaSwatchbook } from 'react-icons/fa'
import './skillsapp'
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    // const skillsContent = document.getElementsByClassName('skills__content'),
    //     skillsHeader = document.querySelectorAll('.skills__header')
    // function toggleSkills() {
    //     let itemClass = this.parentNode.className

    //     for (let i = 0; i < skillsContent.length; i++) {
    //         skillsContent[i].className = 'skills__content skills__close'
    //     }
    //     if (itemClass === 'skills__content skills__close') {
    //         this.parentNode.className = 'skills__content skills__open'
    //     }
    // }
    // skillsHeader.forEach((el) => {
    //     el.addEventListener('click', toggleSkills)
    // })
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
        // <section className="skills section" id='skills'>
        //     <h2 className="section__title">Skills</h2>
        //     <span className="section__subtitle">My technical level</span>
        //     <div className="skills__container grid container">
        //         <div>
        //             <div className="skills__content skills__open">
        //                 <div className="skills__header">
        //                     <div>
        //                         <h1 className="skills__title">Frontend developer</h1>
        //                         <span className='skills__subtitle'>More than 4 years</span>
        //                     </div>
        //                     <MdKeyboardArrowDown className='skills__arrow' />
        //                 </div>
        //                 <div className="skills__list grid">
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">HTML</div>
        //                             <span className="skills__number">90%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__html"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">CSS</div>
        //                             <span className="skills__number">80%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__css"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">JavaScript</div>
        //                             <span className="skills__number">70%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__js"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">React</div>
        //                             <span className="skills__number">75%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__react"></span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="skills__content skills__close">
        //                 <div className="skills__header">
        //                     <HiServer className='skills_icon' />
        //                     <div>
        //                         <h1 className="skills__titles">Backend developer</h1>
        //                         <span className='skills__subtitle'>More than 2 years</span>
        //                     </div>
        //                     <MdKeyboardArrowDown className='skills__arrow' />
        //                 </div>
        //                 <div className="skills__list grid">
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">PHP</div>
        //                             <span className="skills__number">80%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__php"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">None Js</div>
        //                             <span className="skills__number">70%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__node"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">Firebase</div>
        //                             <span className="skills__number">60%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__firebase"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">Python</div>
        //                             <span className="skills__number">55%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__python"></span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>
        //             <div className="skills__content skills__close">
        //                 <div className="skills__header">
        //                     <FaSwatchbook className='skills_icon' />
        //                     <div>
        //                         <h1 className="skills__titles">Backend developer</h1>
        //                         <span className='skills__subtitle'>More than 2 years</span>
        //                     </div>
        //                     <MdKeyboardArrowDown className='skills__arrow' />
        //                 </div>
        //                 <div className="skills__list grid">
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">PHP</div>
        //                             <span className="skills__number">80%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__php"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">None Js</div>
        //                             <span className="skills__number">70%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__node"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">Firebase</div>
        //                             <span className="skills__number">60%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__firebase"></span>
        //                         </div>
        //                     </div>
        //                     <div className="skills__data">
        //                         <div className="skills__titles">
        //                             <div className="skills__name">Python</div>
        //                             <span className="skills__number">55%</span>
        //                         </div>
        //                         <div className="skills__bar">
        //                             <span className="skills__percentage skills__python"></span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Skills