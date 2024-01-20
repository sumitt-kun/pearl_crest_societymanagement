import React, { useState } from "react";
import feat_det from "../feat_det";
import { FaPlus, FaMinus } from "react-icons/fa";

const Features = () => {
  const [isOpen, setIsOpen] = useState(Array(feat_det.length).fill(false));

  const toggleDropdown = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-[url('/static/images/features_bg.avif')] bg-cover bg-right-top">
      <div className="m-3 md:ml-10">
        <div>
          <h1 className="p-2 text-center md:text-left text-6xl">Features</h1>
          <p className="md:p-3 text-center md:text-left md:mr-80 text-2xl">
            Uncover a seamless and intuitive user experience as you navigate through advanced tools and functionalities designed to enhance your interaction and engagement. Discover a world of convenience and innovation right at your fingertips.
          </p>
        </div>
        <div className="md:grid grid-cols-2 mt-10">
          <div className="flex flex-col">
            {feat_det.map((ele, index) => (
              <div key={index} className="p-3 md:p-5 border-2 border-white text-white bg-gradient-to-b from-gray-600 to-black">
                <p className="flex text-2xl items-center">
                  {<ele.icon className="mr-1" size={40} />}
                  {ele.title}
                  <span className="ml-auto">
                    {isOpen[index] ? (
                      <FaMinus className="m-1 cursor-pointer" onClick={() => toggleDropdown(index)} />
                    ) : (
                      <FaPlus className="m-1 cursor-pointer" onClick={() => toggleDropdown(index)} />
                    )}
                  </span>
                </p>
                {isOpen[index] && <p className="text-xl p-1">{ele.desc}</p>}
              </div>
            ))}
          </div>
          <div>
            <img className="w-1/2 m-auto rounded-2xl" src="/static/images/Laptop.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
