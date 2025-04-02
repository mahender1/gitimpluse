import BreadCumbs from './component/BreadCumbs'
import ProductDetails from './component/ProductDetails';
import VideoWithImageFrame from './component/VideoWithImageFrame';


const ProductDetailPage = () => {
  return (
    <>
      <BreadCumbs className="crdioBg" breadcumTitle="Caratteristiche principali" title="Cara principali" />
      <ProductDetails/>
      <div className="container pb-14">
      <VideoWithImageFrame
      className="videoFrame"
        imageSrc="videoFrame.jpg"
        videoSrc="2UpNnx6J1iE" // Just the YouTube video ID, not the full URL
      />
      </div>
    </>
  );
};

export default ProductDetailPage;
