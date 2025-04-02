import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const product = {
  title: "Cara principali",
  description: `<ul>
    <li>Il rivestimento in resina fenolica sulla cinghia del tapis roulant garantisce durevolezza, autolubrificazione e lunga durata.</li>
    <li>Il sistema di ammortizzazione a molla in gomma offre un assorbimento degli urti superiore, favorendo la protezione delle articolazioni per gli arti inferiori (Pulflex Commercial Suspension Sistem).</li>
    <li>Con una struttura di ammortizzazione a due stadi, si adatta automaticamente agli utenti di pesi diversi, offrendo una maggiore protezione delle articolazioni.</li>
    <li>La ricarica wireless per i telefoni cellulari aggiunge valore e praticità extra oltre alla funzione primaria del prodotto.</li>
    <li>I manubri in schiuma integrati offrono una migliore esperienza utente e protezione della sicurezza.</li>
    <li>Progettato con impostazioni di inclinazione che vanno dallo 0 al 20%, offrendo agli utenti una gamma più ampia di opzioni di allenamento in pendenza.</li>
    <li>Dotato di modulo Bluetooth per la connettività ad app come Zwift, consentendo l'allenamento e la raccolta dati.</li>
    <li>Sistema di ventilazione.</li>
    <li>Controllo on-your-finger-tips per una maggiore sicurezza.</li>
    <li>Programmi mirati semplici e intuitivi.</li>
    <li>Panoramica dei dati completi dell’allenamento.</li>
    <li>Programmi di allenamento già impostati.</li>
  </ul>`,
  images: [
    "/productImage.png",
    "/productImage.png",
    "/productImage.png",
    "/productImage.png",
    "/productImage.png",
    "/productImage.png",
    "/productImage.png",
  ],
};

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    prevArrow: (
      <button className="slick-prev custom-arrow custom-prev">
        <span>&lt;</span> {/* Previous Arrow Icon */}
      </button>
    ),
    nextArrow: (
      <button className="slick-next custom-arrow custom-next">
        <span>&gt;</span> {/* Next Arrow Icon */}
      </button>
    ),
  };

  return (
    <>
      <div className="container mx-auto py-12 flex flex-col md:flex-row gap-8">
        {/* Left - Image Slider */}
        <div className="w-full md:w-1/2 productPageContent proSlid">
          <div className="mb-4">
            <img src={selectedImage} alt="Selected Product" className="w-full h-auto border border-gray-300" />
          </div>
          <Slider {...settings} className="thumbnail-slider">
            {product.images.map((image, index) => (
              <div key={index} onClick={() => setSelectedImage(image)} className="cursor-pointer">
                <img src={image} alt={`Thumbnail ${index + 1}`} className="border border-gray-300 hover:border-red-500" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right - Product Details */}
        <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">{product.title}</h1>
          {/* Render the description using dangerouslySetInnerHTML */}
          <div
            className="text-sm text-gray-700 mb-6 proDesc"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <button className="bg-[#E52713] uppercase max-w-[270px] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-300">
          richiedi informazione
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
