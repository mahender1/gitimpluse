import React from 'react';
import { Link } from 'react-router-dom';

const MenuData = () => {
  return (
    <>
    <Link to="/" className="text-white">Home</Link>
            <Link to="/Cardio" className="text-white">Cardio</Link>
            <Link to="/about" className="text-white">Selectorized</Link>
            <Link to="/plate-loaded" className="text-white">Plate Loaded</Link>
            <Link to="/functional" className="text-white">Functional</Link>
            <Link to="/support" className="text-white">Support</Link>
            <Link to="/contacts" className="text-white">Contacts</Link>
    </>
  );
};

export default MenuData;