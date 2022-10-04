import React from "react";

function BlobBg() {
  return (
    <div className="mt-36">
      <h1 className=" text-4xl text-gray-500 text-center font-bold">
        Title here
      </h1>

      <div className="h-screen">
        <div className="h-3/4">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_gsp8bvo7.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default BlobBg;
