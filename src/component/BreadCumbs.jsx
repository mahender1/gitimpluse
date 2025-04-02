import React from 'react';
import { Link } from 'react-router-dom';

const BreadCumbs = ({ className, breadcumTitle, title }) => {
  const dynamicClassName = className ? `overflow-hidden bg-[#000] pt-48 pb-8 ${className}` : 'overflow-hidden bg-[#000] pt-48 pb-8';
  
  return (
    <div className={dynamicClassName}>
      <div className="container">
        <div className="breadCumbs text-white">
          <ul className="flex gap-2">
            <li>Home</li>
            <li>/</li>
            <li><Link to="/" className="text-[#E52713]">{breadcumTitle}</Link></li>
          </ul>
          <h1 className="text-[#E52713] flex items-center"><span>&nbsp;</span> {title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BreadCumbs;
