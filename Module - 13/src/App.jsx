import "./App.css";
import Header from "./components/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import Project from "./pages/project/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
