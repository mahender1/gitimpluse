import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    countryCode: '+1', // Default country code (US)
    agreeToPrivacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit} className="">

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-base mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-[#A1A1A1] rounded-md bg-transparent"
        />
      </div>

      {/* Phone Number Input with Country Code */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-base mb-1">Phone Number</label>
        <div className="mb-4 flex items-center">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className="border border-[#A1A1A1] text-[#A1A1A1] p-3 rounded-md mr-2 bg-transparent text-center"
        >
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+91">+91</option>
          {/* Add more country codes as needed */}
        </select>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-[#A1A1A1] rounded-md bg-transparent"
        />
      </div>
      </div>

      {/* Privacy Policy Checkbox */}
      <div className="mb-4 flex items-center justify-between">
      <div className="formCondition">
      <input
          type="checkbox"
          id="agreeToPrivacy"
          name="agreeToPrivacy"
          checked={formData.agreeToPrivacy}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label htmlFor="agreeToPrivacy" className="text-sm">
        I have read your <Link href="#" className="text-[#E52713] underline">Privacy Policy.</Link>
        </label>
        </div>
        <div className="formBtn">
        <button
          type="submit"
          className="w-full bg-[#E52713] text-white py-3 px-5 uppercase rounded-md hover:text-[#E52713] hover:bg-white font-bold transition duration-300"
        >
          Subscribe
        </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
