import MoviesCard from "./MoviesCard";
import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Carousel = styled(motion.div)`
  overflow: hidden;
`;
const InnerCarousel = styled(motion.div)`
  display: flex;
`;
const MotionItem = styled(motion.div)`
  min-height: 40rem;
  min-width: 30rem;
  padding: 30px;
`;
const MoviesCardList = ({ movies }) => {
  console.log("data", movies);
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  
  useEffect(() => {
    x.stop();
    x.set(0);
    //Work around for carousel.current.scrollWidth does not give correct value when refresh page. It should be carousel.current.scrollWidth - carousel.current.offsetWidth
    const firstCardElement = carousel.current.firstChild.children[0];
    const cardWidth = firstCardElement ? firstCardElement.clientWidth : 0;
    const cardQuantity = movies ? movies.length : 0;
    setWidth(cardWidth * cardQuantity - carousel.current.offsetWidth);
  }, [movies]);
  return (
    <Carousel ref={carousel}>
      <InnerCarousel
        style={{x}}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {movies instanceof Array
          ? movies.map((m, idx) => (
              <MotionItem key={idx}>
                <MoviesCard movie={m} />
              </MotionItem>
            ))
          : "Loading..."}
      </InnerCarousel>
    </Carousel>
  );
};

export default MoviesCardList;
