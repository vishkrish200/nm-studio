import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

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
  height: 100%;
  color: white;
  font-size: 10rem;
  overflow-wrap: break-word;
`;

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "100%" },
};

export default function Hero() {
  // const { ref, inView } = useInView({
  //   threshold: 0.9,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     setProject(null);
  //   }
  // }, [inView]);

  return (
    <div>
      <HeroImage>
          <HeroText
            initial="hidden"
            variants={variants}
            animate={"visible"}
            transition={{ duration: 0.7, fade: [0.6, 0.05, -0.01, 0.9] }}
          >
            {" "}
            We Are NM Studio
          </HeroText>
      </HeroImage>
    </div>
  );
}
