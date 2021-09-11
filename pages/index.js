import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Head from "next/head";

export default function Home({ categories }) {
  return (
    <>
      <Navigation categories={categories} />
      <HomePage categories={categories} />
      <Footer />
    </>
  );
}
