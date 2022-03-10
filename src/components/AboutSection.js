import React from 'react'
import home1 from "../img/home1.png"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import { titleAnim, fade, photoAnim } from "../animation"

import { StyledAbout, StyledDescription, StyledHide, StyledImage } from "../styles"
import Wave from "./Wave"

const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              We work to make
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>your <span>dreams</span> come </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}> true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>Contact us for any photo or video ideas that you have. We have professionals with amazing skills</motion.p>
        <Link to="/contactus">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="A guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  )
}



export default AboutSection