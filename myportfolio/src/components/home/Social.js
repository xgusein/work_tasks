import React from 'react'
import Lottie from 'react-lottie'
import scgit from '../home/animation_lmgbjrp4.json'
import scig from '../home/animation_lmgcu6uq.json'
import sctrib from '../home/animation_lmgcv0vk.json'
const Social = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scgit,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className='home__social'>
      <a href="" className="home__social-icon" target="_blank">
      
      </a>
      <a href="" className="home__social-icon" target="_blank">
        <i class="uil uil-dribbble"></i>
      </a>
      <a href="" className="home__social-icon" target="_blank">
      <Lottie width={100}  options={defaultOptions}/>
      </a>
    </div>
  )
}

export default Social