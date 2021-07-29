// import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Review.css'

import React,{useState} from 'react'
import {Icon} from 'react-icons-kit'
import {arrowRight} from 'react-icons-kit/feather/arrowRight'
import {arrowLeft} from 'react-icons-kit/feather/arrowLeft'



import {motion} from 'framer-motion'

const imgBoxVariants = {
  hidden:{
    x: 500,
    opacity: 0
  },
  visible:{
    x: 0,
    opacity: 1,
    transition:{
      delay: 0.5, duration: 0.5
    }
  }
}
const Review = () => {
  const [step, setStep] = useState(1);

  const handleLeftArrow=()=>{
    if(step===1){
      setStep(5);
    }
    else{
    setStep(step-1);
    }
  }

  const handleRightArrow=()=>{
    if(step===5){
      setStep(1);
    }
    else{
      setStep(step+1);
    }
  }

  const goToSlide1=()=>{
    setStep(1);
  }

  const goToSlide2=()=>{
    setStep(2);
  }

  const goToSlide3=()=>{
    setStep(3);
  }

  const goToSlide4=()=>{
    setStep(4);
  }

  const goToSlide5=()=>{
    setStep(5);
  }

    return (
      <div className='wrapper'>

      <div className='content'>

        <div className='left-arrow' onClick={handleLeftArrow}>
          <Icon icon={arrowLeft} size={28}/>
        </div>

       {step===1&&<motion.div className='img-box' variants={imgBoxVariants}
       initial="hidden" animate="visible">
         <img src="/sponsor1.jpg"  alt="img1"/>        
       </motion.div>}

       {step===2&&<motion.div className='img-box' variants={imgBoxVariants}
       initial="hidden" animate="visible">
         <img src="/sponsor2.jpg"  alt="img1"/>         
       </motion.div>}

       {step===3&&<motion.div className='img-box' variants={imgBoxVariants}
       initial="hidden" animate="visible">
         <img src="/sponsor3.jpg"  alt="img1"/>         
       </motion.div>}

       {step===4&&<motion.div className='img-box' variants={imgBoxVariants}
       initial="hidden" animate="visible">
         <img src="/sponsor4.jpg"  alt="img1"/>         
       </motion.div>}

       {step===5&&<motion.div className='img-box' variants={imgBoxVariants}
       initial="hidden" animate="visible">
         <img src="/sponsor5.jpg"  alt="img1"/>         
       </motion.div>}

        <div className='right-arrow' onClick={handleRightArrow}>
          <Icon icon={arrowRight} size={28}/>
        </div>

      </div>

      <div className='indicators-box'>

          {step===1&&<><div className='indicator active'></div>
          <div className='indicator' onClick={goToSlide2}></div>
          <div className='indicator' onClick={goToSlide3}></div></>}

          {step===2&&<><div className='indicator' onClick={goToSlide1}></div>
          <div className='indicator active'></div>
          <div className='indicator' onClick={goToSlide3}></div></>}

          {step===3&&<><div className='indicator' onClick={goToSlide2}></div>
          <div className='indicator active'></div>
          <div className='indicator' onClick={goToSlide4}></div></>}

          {step===4&&<><div className='indicator' onClick={goToSlide3}></div>
          <div className='indicator active'></div>
          <div className='indicator' onClick={goToSlide5}></div></>}

          {step===5&&<><div className='indicator' onClick={goToSlide1}></div>
          <div className='indicator' onClick={goToSlide5}></div>
          <div className='indicator active'></div></>}

      </div>
      
    </div>
    );
};

export default Review;