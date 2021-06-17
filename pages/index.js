import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import StickySlider from "../components/StickySlider";

export default function Home() {
  return (
    <>
        <Navigation />
        <Hero />
        <StickySlider />
        <Footer>This is the footer</Footer>
    </>
  );
}
