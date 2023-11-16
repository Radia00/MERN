import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";
// import Testimonial from "./pages/Testimonial";
import data from "./database/data.json";

const App = () => {
  // console.log(data.featurePost);
  return (
    <BrowserRouter>
      <Navbar data={data.navbar} logo={data.logo} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/home"
          element={
            <Home
              hero={data.hero}
              slider={data.slider}
              workList={data.workList}
              counter={data.counter}
              featurePost={data.featurePost}
              newsletter={data.newsletter}
              footer={data.footer}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
