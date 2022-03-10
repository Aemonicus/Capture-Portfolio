import React from 'react'
import styled from "styled-components"
import { StyledAbout } from "../styles"
import Toggle from "./Toggle"
import { AnimateSharedLayout } from 'framer-motion'
import UseScroll from './UseScroll'
import { scrollReveal } from "../animation"

const FaqSection = () => {

  const [ element, controls ] = UseScroll()

  return (
    <StyledFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Payments methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="What kind of products ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout >
    </StyledFaq>
  )
}

const StyledFaq = styled(StyledAbout)`
  display: block ;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection