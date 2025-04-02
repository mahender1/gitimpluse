import { Link } from 'react-router-dom';
import MenuData from '../data/MenuData';
import ContactForm from '../component/ContactForm';
function ThemeFooter() {
  return (
   <>
   <div className="footer bg-black py-14 pb-10 text-white">
   <div className="container">
   <div className="flex gap-80">
   <div className="w-1/2">
   <img src="logo.png" alt="logo.png" className="max-w-72"/>
   </div>
   <div className="w-1/2">
   <img src="newsletter.png" alt="newsletter.png" className="max-w-full"/>
   </div>
   </div>
   <div className="flex gap-80 mt-6">
   <div className="w-1/2">
   <div className="flex gap-4">
   <div className="flex align-middle"><p className="mb-0 flex items-center text-sm">Distribuito da</p></div><img src="contact.png" alt="contact.png" className="max-w-full"/>
   </div>
   <div className="footerMenu mt-6"><MenuData/>
   </div>
   </div>
   <div className="w-1/2">
   <ContactForm/>
   </div>
   </div>
   <div className="pt-9 copyRight text-center">
   <p className="text-sm">© Copyright - 2025 : All Rights Reserved <Link to="/" className="text-[#E52713] underline">Cookie Policy</Link>  <Link to="/" className="text-[#E52713] underline">Privacy Policy</Link>  </p>
   </div>
   </div>
   </div>
   </>
  );
}

export default ThemeFooter;
