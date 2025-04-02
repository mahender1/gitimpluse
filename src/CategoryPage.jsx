import { Link } from 'react-router-dom';
import BreadCumbs from './component/BreadCumbs';

const cardioCategoriesContent = [
  {
    image: "cat1.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat2.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat3.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat4.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat1.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat2.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat3.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
  {
    image: "cat4.png",
    category: "Tapis Roulant",
    cod: "COD: AC850",
    link: "/ProductDetailPage",
  },
];

const CategoryPage = () => {
  return (
    <>
      <BreadCumbs className="crdioBg" breadcumTitle="Tapis Roulant" title="tapis roulant" />
      <div className="container">
        <div className="flex flex-wrap gap-4 py-12">
          {cardioCategoriesContent.map((value, id) => {
            return (
              <Link to={value.link} key={id} className="group catContent transition duration-300 ease-in-out">
                <div className="mb-6">
                  <img
                    src={value.image}
                    alt={value.category}
                    className="border border-gray-300 group-hover:border-[#E52713] transition duration-300"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-black transition duration-300 capitalize">
                    {value.category}
                  </h3>
                  <p className="mb-4">{value.cod}</p>
                  <button className="group-hover:bg-[#E52713] group-hover:text-white text-gray-800 py-2 px-10 uppercase rounded-md hover:text-[#E52713] bg-[#EDEEEF] border border-gray-300 font-bold transition duration-300">More</button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
