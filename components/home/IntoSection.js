import React from "react";

function IntoSection() {
  return (
    <div className="h-screen bg-theme">
      <div className="grid md:grid-cols-1 grid-cols-2 h-screen md:items-baseline items-center border-4 border-white transform rotate-12 md:rotate-0 md:border-0 mx-10 bg-theme ">
        <div className="h-3/4 md:h-full">
          <lottie-player
            src="https://assets5.lottiefiles.com/private_files/lf30_zirjejlr.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="font-bold text-white md:px-5">
          <h1 className="text-5xl md:text-3xl">
            Hello there, I am <b className="text-yellow-500">JOSHUA</b>
          </h1>
          <h1 className="text-2xl md:text-xl">
            FullStack <b className="text-red-500">Developer</b>, Marketing
          </h1>
        </div>
      </div>
    </div>
  );
}

export default IntoSection;
