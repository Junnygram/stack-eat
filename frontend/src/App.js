import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
