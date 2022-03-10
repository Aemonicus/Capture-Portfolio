import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { MovieState } from "../movieState"
import Award from "../components/Award"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"

const MovieDetail = () => {

  const url = useLocation()
  const [ movies, setMovies ] = useState(MovieState)
  const [ movie, setMovie ] = useState(null)


  useEffect(() => {
    const currentMovie = movies.filter(stateMovie => stateMovie.url === url.pathname)
    setMovie(currentMovie[ 0 ])
  }, [ movies, url ])

  return (
    <>
      {movie && (
        <StyledDetails variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie?.title} />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map(award => (
              <Award title={award.title} description={award.description} key={award.title} />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt={movie.secondaryImg} />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  )
}

const StyledDetails = styled(motion.div)`
  color: white;
`
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute ;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%) ;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover ;
  }
`

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh ;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover ;
  }
`

export default MovieDetail