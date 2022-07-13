import React from "react";

import HomeSlider from "./components/Slider";
import HomeProduct from "./components/HomeProduct";
import HomeCollection from "./components/HomeCollection";
import HomeAbout from "./components/HomeAbout";
import HomeMore from "./components/HomeMore";
import HomeContent from "./components/HomeContent";
import HomeComment from "./components/HomeComment";
function HonePage() {
  return (
    <div>
      <HomeSlider />
      <HomeProduct />
      <HomeContent />
      <HomeCollection />
      <HomeComment />
      <HomeAbout />
      <HomeMore />
    </div>
  );
}

export default HonePage;
