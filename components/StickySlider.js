import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const sliders = [
  { image: "https://source.unsplash.com/weekly?fire/1600x900", text: "Art" },
  {
    image: "https://source.unsplash.com/weekly?earth/1600x900",
    text: "Architecture",
  },
  {
    image: "https://source.unsplash.com/weekly?water/1600x900",
    text: "Product",
  },
];

const CategoryDiv = styled.div`
  width: 100%;
  height: 10vh;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);

  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  position: sticky;
  bottom: 0;
`;

const CategoryText = styled(motion.div)`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  bottom: 0;
`;

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const HomeProjectItem = ({ project }) => {
  const ref = useRef();

  return (
    <MainDiv>
      <StyledWrapper
        ref={ref}
        style={{ backgroundImage: `url(${project.image})` }}
      />
    </MainDiv>
  );
};

function StickySlider() {
  const divRef = useRef(null);


  const [projectIndex, setProjectIndex] = useState(-1);

  const intersection1 = useIntersection(divRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  // intersection && intersection.intersectionRatio < 1 ? fadeOut() : fadeIn();

  return (
    <>
      {sliders.map((slider) => (
        <HomeProjectItem project={slider} />
      ))}
      {projectIndex >= 0 && (
        <CategoryDiv
          initial="hidden"
          exit="hidden"
          variants={variants}
          animate={
            intersection && intersection.intersectionRatio < 1
              ? "hidden"
              : "visible"
          }
          transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <AnimatePresence>
            <CategoryText>{sliders[projectIndex].text}</CategoryText>
          </AnimatePresence>
        </CategoryDiv>
      )}
    </>
  );
}

export default StickySlider;
