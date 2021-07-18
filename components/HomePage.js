import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "./Hero";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

const CategoryDiv = styled.div`
  width: 100%;
  height: 10%;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const CategoryText = styled(motion.div)`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  /* opacity: 1;
  animation: fade 2s linear;

  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  } */
`;

const sliders = [
  {
    image: "https://source.unsplash.com/weekly?fire/1600x900",
    text: "Art",
    isInView: false,
  },
  {
    image: "https://source.unsplash.com/weekly?earth/1600x900",
    text: "Architecture",
    isInView: false,
  },
  {
    image: "https://source.unsplash.com/weekly?water/1600x900",
    text: "Product",
    isInView: false,
  },
];

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "100%" },
};

function HomeProjectItem({ project, onActive }) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    if (inView) {
      onActive(project.text);
    }
  }, [inView]);
  return (
    <MainDiv>
      <StyledWrapper
        ref={ref}
        style={{ backgroundImage: `url(${project.image})` }}
      ></StyledWrapper>
    </MainDiv>
  );
}

function HomePage() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const [project, setProject] = useState();

  return (
    <>
      <Hero setProject={setProject} ref={ref} />

      {sliders.map((slider) => (
        <HomeProjectItem
          // ref={ref}
          // inView={inView}
          project={slider}
          onActive={setProject}
        />
      ))}
      <div>
        {project && (
          <CategoryDiv
            initial="hidden"
            variants={variants}
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, fade: [0.6, 0.05, -0.01, 0.9] }}
          >
            <AnimatePresence>
              <CategoryText
                // initial="hidden"
                exit="hidden"
                variants={variants}
                // animate={project.isInView ? "visible" : "hidden"}
                // className="category-text"
                transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                {project}
              </CategoryText>
            </AnimatePresence>
          </CategoryDiv>
        )}
      </div>
    </>
  );
}

export default HomePage;
