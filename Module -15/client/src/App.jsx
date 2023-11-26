import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
// import UpdatePage from "./Pages/UpdatePage";
import Navbar from "./Components/Common/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        {/* <Route path="/update/:id" element={<UpdatePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
