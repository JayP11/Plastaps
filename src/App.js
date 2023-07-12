import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
