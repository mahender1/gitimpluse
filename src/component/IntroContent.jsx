import { Link } from 'react-router-dom';
const IntroContent = () => {
  return (
    <div className="overflow-hidden bg-[#E52713] py-14 text-center">
    <div className="container">
      <img src="./abLogo.png" alt="ablogo" className="mx-auto" />
      <p className="text-white m-9 text-lg">Impulso (QingDao) Health Tech CO., LTDsi impegna a fornire prodotti, servizi e supporto alle vendite competitivi per i clienti nel settore del fitness, è stato costruito un sistema di  prodotti e servizi perfetto nei settori della ricerca e sviluppo delle  attrezzature per il fitness, della produzione, del marketing e della</p>
      <Link to="/" className="cta text-white inline-block uppercase"> scopri di piu </Link>
    </div>
    </div>
  );
};

export default IntroContent;