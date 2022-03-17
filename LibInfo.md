# Utilisation dans ce projet des lib styled-component, framer-motion et react-intersection-observer

Deux lib qui fonctionnent bien ensemble, styled-component utilisée pour styliser et framer-motion pour animer des éléments.

React-intersection-observer utilisée pour lancer un event quand l'utilisateur arrive à un point précis de la page. Go component UseScroll ligne 26/28. On peut le combiner avec framer-motion pour lancer une animation à un moment précis du scroll.

## Framer-motion est utilisé pour réaliser des animations d'éléments

Framer-motion nécessite :

- Création des animations en object/css qui nous intéressent (fichier animation pour le détail)
- Indiquer quel élément sera animé en précisant "motion." devant ce dernier, soit dans le jsx soit lors de la création du styled-component
- Indiquer les différentes options dans l'élément en jsx (variants, animate, hidden, initial..)

```js
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  fade,
  lineAnim,
} from "../animation";

const OurWork = () => {

  // Go component UseScroll pour plus de détails. Ici on va avoir deux events pour le scroll car ils sont posés sur deux éléments distincts
  const [ element, controls ] = UseScroll()
  const [ element2, controls2 ] = UseScroll()

  return (
    <motion.div variants={sliderContainer}>
      <StyledFrame1 variants={slider}></StyledFrame1>
      <StyledFrame2 variants={slider}></StyledFrame2>
      <StyledFrame3 variants={slider}></StyledFrame3>
      <StyledFrame4 variants={slider}></StyledFrame4>
    </motion.div>;

    <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
      <motion.h2>Good Times</motion.h2>
      <motion.div className="line" variants={lineAnim}></motion.div>
      <Link to="good-times">
        <motion.img src={goodtimes} alt="goodtimes" />
      </Link>
    </StyledMovie>
  )}

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`
```

## Styled-component est utilisé pour styliser des éléments

Ci-dessous, je nomme "Styled+nom de l'élément" pour le différencier des composants React classiques car il possède la même apparence qu'un composant React. Dessous la fonction, je crée en css classique l'élément encapsulé dans la fonction styled(type de l'élément)``.

Ex : const StyledDiv = styled(div)`display: flex; align-items: center;`

```js
import styled from 'styled-components'

...

<StyledHide>
  <motion.h2 variants={titleAnim}>We work to make</motion.h2>
</StyledHide>;

const StyledHide = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
```

Petite particularité, on peut hériter du style d'un autre élément (pas forcément parent) et réécrire une/plusieurs propriétés seulement, qui prendront le dessus sur celles déjà présentes dans le premier élément si c'est le cas

```js
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;
```
