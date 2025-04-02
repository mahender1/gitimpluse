import { Link } from 'react-router-dom';
import BreadCumbs from './component/BreadCumbs';

const cardioCategories = [
  {
    image: "cat1.png",
    category: "TAPIS ROULANT",
    link: "/CategoryPage",
  },
  {
    image: "cat2.png",
    category: "ELLIPTICAL",
    link: "/CategoryPage",
  },
  {
    image: "cat3.png",
    category: "VERTICAL BIKE",
    link: "/CategoryPage",
  },
  {
    image: "cat4.png",
    category: "HORIZONTAL BIKE",
    link: "/CategoryPage",
  },
  {
    image: "cat1.png",
    category: "TAPIS ROULANT",
    link: "/CategoryPage",
  },
  {
    image: "cat1.png",
    category: "TAPIS ROULANT",
    link: "/CategoryPage",
  },
  {
    image: "cat1.png",
    category: "TAPIS ROULANT",
    link: "/CategoryPage",
  },
  {
    image: "cat1.png",
    category: "TAPIS ROULANT",
    link: "/CategoryPage",
  },
];

const Cardio = () => {
  return (
    <>
      <BreadCumbs className="crdioBg" breadcumTitle="Cardio" title="Cardio" />
      <div className="container">
        <div className="flex flex-wrap gap-4 py-12">
          {cardioCategories.map((value, id) => {
            return (
              <Link to={value.link} key={id} className="group catContent transition duration-300 ease-in-out">
                <div className="text-center">
                  <img
                    src={value.image}
                    alt={value.category}
                    className="border border-gray-300 group-hover:border-[#E52713] transition duration-300"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-black group-hover:text-[#E52713] transition duration-300">
                    {value.category}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cardio;
