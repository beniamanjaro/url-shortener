import React from "react";
import UrlForm from "./UrlForm";

const Body = () => {
  return (
    <div className="flex justify-center w-full h-full bg-yellow-500">
      <div className="flex justify-center md:mt-24 m-4 items-center md:h-[50vh] md:w-[60vw] w-screen bg-white rounded-xl hover:shadow-xl hover:translate-y-[-3px] ease-out duration-300 ">
        <UrlForm />
      </div>
    </div>
  );
};

export default Body;
