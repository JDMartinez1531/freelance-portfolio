import React from "react";

function Empower() {
  return (
    <div className="my-20">
      <div className="text-center h-52 bg-primary">
        <h1 className="text-white font-bold text-4xl py-10 md:text-2xl">
          Empowering your business to bring your ideas to life
        </h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-1 lg:mx-8 md:mx-5 mx-32 shadow-2xl bg-white rounded-lg -mt-20 hover:bg-gray-700 hover:text-white">
        <div>
          <div className="h-1/2">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_aewe22ol.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-3xl text-center md:px-5 px-8">Consultation</h1>
          <p className="text-center text-xl md:px-5 px-8">
            Strategize digital solutions for your business
          </p>
        </div>

        <div>
          <div className="h-1/2">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_wqd1jwoz.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-3xl text-center md:px-5 px-8">Design</h1>
          <p className="text-center text-xl md:px-5 px-8">
            Custom design process that fits your specific industy
          </p>
        </div>

        <div>
          <div className="h-1/2">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_p1qiuawe.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-3xl text-center md:px-5 px-8">Development</h1>
          <p className="text-center text-xl md:px-5 px-8">
            Personal assistance from design to deployment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Empower;
