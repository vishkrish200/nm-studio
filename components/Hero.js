import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useIntersection } from "react-use";
import { useRef } from "react";

const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  z-index: 500;
  width: 100vw;
`;

const HeroText = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  font-size: 10rem;
`;

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "100%" },
};

export default function Hero() {
  const divRef = useRef(null);

  const intersection = useIntersection(divRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  return (
    <div>
      <HeroImage>
        <AnimatePresence>
          <HeroText
            initial="hidden"
            exit="hidden"
            variants={variants}
            animate={
              intersection && intersection.intersectionRatio < 0.9
                ? "hidden"
                : "visible"
            }
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            We Are NM Studio
          </HeroText>
        </AnimatePresence>
      </HeroImage>
    </div>
  );
}
