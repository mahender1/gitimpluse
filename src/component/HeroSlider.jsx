import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute bottom-6 left-1/2 transform -translate-x-10 z-20 text-white border p-3 rounded-full"
  >
    <FaChevronLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute bottom-6 left-1/2 transform translate-x-10 z-20 text-white border p-3 rounded-full"
  >
    <FaChevronRight />
  </button>
);

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />
  };

  const slides = [
    {
      image: '/homepageBg.jpg',
      subtitle: 'unisciti al modo di',
      title: (
        <>
          impulse <div className="myheadSlider"><span className="text-blue-500">&nbsp;</span> fitness</div>
        </>
      ),
      description: 'siamo un partner affidabile',
      cta: 'Scopri di più'
    },
    {
      image: '/homepageBg.jpg',
      subtitle: 'unisciti al modo di',
      title: (
        <>
          impulse <div className="myheadSlider"><span className="text-blue-500">&nbsp;</span> fitness</div>
        </>
      ),
      description: 'siamo un partner affidabile',
      cta: 'Scopri di più'
    },
  ];

  return (
    <div className="relative mt-0 leadingZero bg-[#191919]" > 
      <Slider {...settings} className="z-10">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div 
              className="bg-cover bg-center min-h-screen w-full"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
                <div className="container mx-auto pt-12 text-white">
                  <h2 className="sliderSubtitle text-lg italic uppercase tracking-widest">{slide.subtitle}</h2>
                  <h1 className="mt-3 mb-3 sliderHeading font-bold text-8xl uppercase italic tracking-wider">{slide.title}</h1>
                  <p className="sliderSubtitle text-lg italic uppercase tracking-widest mb-4">{slide.description}</p>
                  <Link to="/" className="cta inline-block uppercase"> scopri di piu </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;