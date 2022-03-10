import React from 'react'
// Lance un event dès qu'on arrive au point défini
import { useInView } from "react-intersection-observer"

import { useAnimation } from "framer-motion"

const UseScroll = () => {
  // view passe à true dès qu'on arrive à l'élément, là avec l'option threshold on passe view à true à la moitié de l'élément et non plus au tout début
  // Augmenter le threshold si besoin mais attention sur les petits écrans il ne fonctionnera pas
  const [ element, view ] = useInView({ threshold: 0.2 })
  const controls = useAnimation()

  if (view) {
    controls.start("show")
  } else {
    controls.start("hidden")
  }

  return [ element, controls ]
}

export default UseScroll