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
    <div className="features">
      <div className="m-3 md:ml-10">
        <div>
          <h1 className="p-2 text-center md:text-left text-6xl">Features</h1>
          <p className="md:p-3 text-center md:text-left md:mr-80 text-2xl">
            Uncover a seamless and intuitive user experience as you navigate through advanced tools and functionalities designed to enhance your interaction and engagement. Discover a world of convenience and innovation right at your fingertips.
          </p>
        </div>
        <div className="mt-10">
          <div className="">
            {feat_det.map((ele, index) => (
              <div key={index} className="p-3 md:p-5 border-2 border-white text-white bg-black shadow-2xl">
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
        </div>
      </div>
    </div>
  );
}

export default Features;
