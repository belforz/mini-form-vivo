import React, { useState, useEffect } from 'react';
import { slideshowImages } from '../form'; // Importa as imagens padrão do slideshow
import { slideshowMobile } from '../form'; // Importa as imagens da versão mobile
import Form from './form'; 

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showLastSlide, setShowLastSlide] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 658);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 658);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const slides = isMobile ? slideshowMobile : slideshowImages;
  const keys = Object.keys(slides);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === keys.length - 1) {
        setShowForm(true);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
      }
    }, 5000); // Tempo de transição entre as imagens

    return () => clearInterval(timer);
  }, [currentIndex, keys.length]);

  const handleNext = () => {
    if (currentIndex === keys.length - 1) {
      setShowForm(true);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keys.length);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + keys.length) % keys.length);
  };

  const handleFormSubmitSuccess = () => {
    setShowForm(false);
    setShowLastSlide(true);
  };

  const currentImage = slides[keys[currentIndex]];

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {!showForm && !showLastSlide ? (
        <div className="relative w-full max-w-3xl md:max-w-5xl mx-auto p-4 rounded-md shadow-lg overflow-hidden border-4 border-transparent animate-border-gradient">
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 z-10"
            aria-label="Imagem anterior"
          >
            <svg className="w-6 h-6 text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="slideshow-content relative w-full h-[300px] md:h-[400px] overflow-hidden">
            {keys.map((key, index) => (
              <div
                key={index}
                className={`slide-wrapper absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out ${
                  currentIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slides[key].url}
                  alt={slides[key].name}
                  className="w-full h-full object-cover object-center rounded-md shadow-md md:object-cover sm:object-contain"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-800 via-transparent to-transparent text-white p-6 shadow-md">
                  <h2 className="flex items-center justify-center text-xl md:text-2xl text-black font-bold">
                    {slides[key].name}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 z-10"
            aria-label="Próxima Imagem"
          >
            <svg className="w-6 h-6 text-purple-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : showForm ? (
        <Form onSubmitSuccess={() => { handleFormSubmitSuccess(); setShowForm(false); setShowLastSlide(true); }} />
      ) : (
        <div className="relative w-full max-w-3xl md:max-w-5xl mx-auto p-4 rounded-md shadow-lg overflow-hidden border-4 border-transparent animate-border-gradient">
          <div className="slide-wrapper w-full h-full">
            <img
              src={slides[keys[keys.length - 1]].url}
              alt={slides[keys[keys.length - 1]].name}
              className="w-full h-full object-cover object-center rounded-md shadow-md md:object-cover sm:object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-800 via-transparent to-transparent text-white p-6 shadow-md">
              <h2 className="flex items-center justify-center text-xl md:text-2xl text-black font-bold">
                {slides[keys[keys.length - 1]].name}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
