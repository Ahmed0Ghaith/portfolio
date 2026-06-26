import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Swal from "sweetalert2";

import ReactGA from "react-ga";
import Blog from "./components/blog/blog";
ReactGA.initialize("G-DNNJ8CLK35");
ReactGA.pageview(window.location.pathname + window.location.search);

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Blog /> */}
      <Experience />
      {/* <Services/> */}
      <Portfolio />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default app;
