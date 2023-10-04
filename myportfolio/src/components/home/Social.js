import React from 'react'
import Lottie from 'react-lottie'
import scgit from '../home/animation_lmgbjrp4.json'
// import scig from '../home/animation_lmgcu6uq.json'
import sctrib from '../home/Animation - 1.json'
import scig from '../home/Animation - 1696430989327.json'
const Social = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scgit,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: scig,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: sctrib, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className='home__social'>
      <a href="" className="home__social-icon" target="_blank">
        <Lottie width={110} options={defaultOptions} />
      </a>
      <a href="" className="home__social-icon" target="_blank">
        <Lottie width={60} options={defaultOptions1} />
      </a>
      <a href="" className="home__social-icon" target="_blank">
        <Lottie width={65}  options={defaultOptions2} />
      </a>
    </div>
  )
}

export default Social