import React from "react";
import furniture1 from "../assets/furniture1.jpg";
import furniture2 from "../assets/furniture2.jpg";
import furniture3 from "../assets/furniture3.jpg";
import shoes1 from "../assets/shoes1.webp";
import shoes2 from "../assets/shoes2.webp";
import shoes3 from "../assets/shoes3.webp";
import gadget1 from "../assets/gadget1.webp";
import gadget2 from "../assets/gadget2.webp";
import gadget3 from "../assets/gadget3.webp";

import BannerCarousel from "./BannerCarousel";
import ProductSection from "./ProductSection";
import Footer from "./Footer";

export default function HomePage() {
  const furnitureProducts = [
    { img: furniture1, name: "Home Temple", offer: "Min. 50% Off" },
    { img: furniture2, name: "Kitchen Trolley", offer: "Min. 50% Off" },
    { img: furniture3, name: "Shoe Rack", offer: "Min. 50% Off" },
  ];

  const shoeProducts = [
    { img: shoes1, name: "Men's Shoes", offer: "Min. 50% Off" },
    { img: shoes2, name: "Running Shoes", offer: "Min. 40% Off" },
    { img: shoes3, name: "High Tops", offer: "Min. 40% Off" },
  ];

  const gadgetProducts = [
    { img: gadget1, name: "True Wireless", offer: "Min. 50% Off" },
    { img: gadget2, name: "Induction Cooktop", offer: "Min. 50% Off" },
    { img: gadget3, name: "Mixer Grinder", offer: "Min. 50% Off" },
  ];

  return (
    <>
      <BannerCarousel />
      <ProductSection title="Best Deals on Furniture" products={furnitureProducts} />
      <ProductSection title="Widest Collection of Shoes" products={shoeProducts} />
      <ProductSection title="Best Gadgets & Appliances" products={gadgetProducts} />
      <Footer />
    </>
  );
}
