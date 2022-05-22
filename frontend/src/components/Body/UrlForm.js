import React from "react";
import { useState, useRef } from "react";
import urlService from "../../services/url";
import { AiFillCopy } from "react-icons/ai";
import { toast } from "react-toastify";
const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    toast.success("Link copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const shortenUrl = await urlService.shortify({ url: url });
      setShortenUrl(`https://desolate-shelf-73679.herokuapp.com/${shortenUrl}`);
    } catch (err) {
      toast.error("Wrong URL!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              id="url"
              value={url}
              name="url"
              className="md:w-[30vw] w-[70vw] bg-black text-white rounded-md h-8 pl-4 outline-none placeholder:text-white"
              onChange={handleUrlChange}
              placeholder="enter url"
              required
            ></input>
          </div>
          <div className="flex" onClick={copyToClipboard}>
            <input
              ref={textAreaRef}
              type="text"
              id="shortenUrl"
              value={shortenUrl}
              name="shortenUrl"
              placeholder="shorten url"
              readOnly
              className="md:w-[30vw] w-[70vw] bg-black text-white pl-4 outline-none cursor-default h-8 placeholder:text-white rounded-md"
            ></input>
            <AiFillCopy className="h-8 w-8" />
          </div>
        </div>
        <div className="flex justify-end py-4">
          <button type="submit">
            <a href="#_" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-pink-700 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">shorten</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </button>
        </div>
      </div>
    </form>
  );
};

export default UrlForm;
