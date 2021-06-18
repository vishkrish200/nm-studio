import { useRef, useState, useEffect } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;
const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  bottom: 0;
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

const HomeProjectItem = ({ project, onActive }) => {
  // const ref = useRef();

  // const intersection = useIntersection(ref, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // });

  // useEffect(() => {
  //   if (intersection && intersection.intersectionRatio < 1)
  //     console.log("Obscured");
  // }, [intersection]);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      onActive(project.text);
    }
  }, [inView]);

  return (
    // <MainDiv>
    <StyledWrapper
      ref={ref}
      style={{ backgroundImage: `url(${project.image})` }}
    ></StyledWrapper>
    // </MainDiv>
  );
};
function StickySlider() {
  const [project, setProject] = useState();

  return (
    <>
      {sliders.map((slider) => (
        <HomeProjectItem project={slider} onActive={setProject} />
      ))}

      {project && (
        <CategoryDiv>
          <AnimatePresence>
            <CategoryText>{project}</CategoryText>
          </AnimatePresence>
        </CategoryDiv>
      )}
    </>
  );
}

export default StickySlider;
