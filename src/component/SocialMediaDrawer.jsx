import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMediaDrawer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(activeIcon === icon ? null : icon);
  };

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-end z-50">
      {[
        { name: 'facebook', icon: <FaFacebookF size={16} /> },
        { name: 'instagram', icon: <FaInstagram size={16} /> },
        { name: 'search', icon: <FaSearch size={16} /> },
      ].map(({ name, icon }) => (
        <div key={name} className="relative flex items-center bg-[#E52713] p-1">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={activeIcon === name ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`absolute right-full bg-white border border-white-300 px-3 py-1 flex items-center shadow-md ${
              activeIcon === name ? 'block' : 'hidden'
            }`}
          >
            <input
              type="text"
              placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
              className="outline-none text-gray-700"
            />
          </motion.div>
          <button
            onClick={() => handleIconClick(name)}
            className="bg-[#E52713] text-white p-2 flex rounded-md items-center border shadow-lg"
          >
            {icon}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaDrawer;
