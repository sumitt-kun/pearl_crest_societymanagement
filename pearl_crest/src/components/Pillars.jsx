import React from "react";

function Pillars(){
    return(
        <div className="l-container mx-2 my-3 items-center rounded-xl p-0 text-center">
        <div className="l-card items-center rounded-xl">
          <div className="l-front rounded-xl">
            <img
              loading="lazy"
              className="m-auto rounded-xl"
              src="../../public/static/images/treasurer.jpg"
              alt="clb-img"
            />
          </div>
          <div className="l-rear flex flex-col flex-wrap items-center rounded-xl bg-gradient-to-r from-red-700 to-pink-800 ">
            <h3 className="mb-0 pb-0 text-xl font-bold text-white">
              MANISH
            </h3>
            <div className="h1 mt-0   w-36 rounded-2xl border-b-4 border-purple-950 pt-0 md:mt-4"></div>
            <p className="text-white">THE TREASURER</p>
          </div>
        </div>
        </div>
    )
}

export default Pillars;