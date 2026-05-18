import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/layout/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/layout/footer/Footer";
import Blog from "./pages/blog/Blog";
import SinglePost from "./pages/singlePost/SinglePost";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";



export function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-anim");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("show");
          void entry.target.offsetWidth;
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.2,
    });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [count, setCount] = useState(0);
  useScrollAnimation();

  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
