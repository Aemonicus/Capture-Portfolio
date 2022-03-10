import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import UseScroll from "../components/UseScroll"
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
// import ScrollTop from '../components/ScrollTop'

const OurWork = () => {

  const [ element, controls ] = UseScroll()
  const [ element2, controls2 ] = UseScroll()

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider}></StyledFrame1>
        <StyledFrame2 variants={slider}></StyledFrame2>
        <StyledFrame3 variants={slider}></StyledFrame3>
        <StyledFrame4 variants={slider}></StyledFrame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="the-athlete">
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2>The Racer</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="the-racer">
          <motion.img src={theracer} alt="racer" />
        </Link>
      </StyledMovie>
      <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <motion.h2>Good Times</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="good-times">
          <motion.img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
      {/* <ScrollTop /> */}
    </StyledWork>
  )
}

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden ;
`

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`

export default OurWork