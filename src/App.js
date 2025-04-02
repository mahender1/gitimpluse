import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About"; // Make sure About.jsx exists
import Cardio from "./Cardio";
import CategoryPage from "./CategoryPage";
import ProductDetailPage from "./ProductDetailPage";
import ThemeFooter from "./common/ThemeFooter";
import SocialMediaDrawer from './component/SocialMediaDrawer'
import Header from "./common/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}

      <SocialMediaDrawer/>
         
<Header/>
      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />          
          <Route path="/Cardio" element={<Cardio />} />
          <Route path="/CategoryPage" element={<CategoryPage />} />          
          <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
        </Routes>
      </main>

      <ThemeFooter/>
    </div>
  );
}

export default App;
