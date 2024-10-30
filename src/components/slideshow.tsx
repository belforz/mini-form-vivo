import { useEffect, useState } from "react";

import { slideshowImages } from "../form";

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const keys = Object.keys(slideshowImages);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, [keys.length]);

  const handleNext = () => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
      setFade(true);
    }, 500);
  };

  const handlePrevious = () => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
      setFade(true);
    }, 500);
  };

  const currentImage = slideshowImages[keys[currentIndex]];

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="relative w-full max-w-lg mx-auto p-4 rounded-md shadow-lg">
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
          aria-label="Imagem anterior"
        ></button>
        <div
          className={`flex flex-col items-center justify-center ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full h-auto max-h[400px] overflow-hidden">
            <img
              src={currentImage.url}
              alt={currentImage.image}
              className="w-full h-full object-contain rounded-md shadow-md"
            />
          </div>

          <p className="mt-4 text-white font-bold text-lg">
            {currentImage.image}
          </p>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300"
          aria-label="Próxima Imagem"
        ></button>
      </div>
    </div>
  );
};

export default Slideshow;
