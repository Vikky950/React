import React, { useState } from "react";
import "./chat1.css";


const Message = ({ user, message, time, isOwn }) => {
  const messageClass = isOwn ? "justify-self-end" : "";
  return (
    <div className={`mb-12 ${messageClass}`}>
      {/* Conditionally render the user icon */}
      
    </div>
  );
};

export default function chatsection1() {
  const [searchInput, setSearchInput] = useState("");

  // Example messages

  return (
    <div>
      <div className="w-[80%] sm:h-auto sm:block hidden sm:w-[100%] mx-auto justify-items-end">
        <div className="w-[125%] h-auto -ml-14 border-black border rounded-lg sm:-ml-36 bg-white">
          <div className="grid bg-[#D8F6E4] rounded-b-none rounded-lg grid-cols-3 p-4 gap-4">
            <div className="w-48 text-sm sm:text-lg">
              The project title name
            </div>
            <div className="font-montserrat font-semibold -mr-[70%] justify-self-end">
              
            </div>
            <div className="ml-[80%]">
              <img className="w-6 cursor-pointer" src={threedotssvg} />
            </div>
            <div className="-mt-8 w-44 flex items-center justify-start text-sm sm:text-md">
              <img className="w-6 pr-2" src={ecoiconvg} />
              <div>Bangman Group</div>
            </div>
          </div>
          <div className="w-full grid justify-items-center">
            <div className="w-[97%] h-[47vh]  overflow-y-auto hide-scrollbar pt-24">
            <div className="clip-chat  mb-0 rounded-lg  w-auto relative bg-purple  ml-48 mt-96 bo ">
              <p className=" text-red ">
                I remember watching this footage when it first came out in 1990 and thinking these guys
                were absolutely mad. Now I look at this footage and realize that they all look like meth
                dealers who were molested by their uncles.
              </p>
           </div>
            </div>
          </div>
          <div className="w-[98%] mb-1 justify-self-center flex items-center justify-center gap-6">
            <div className="w-full  bg-[#1DB55980] ">
              <div className="border h-10 border-[#979797] bg-[#D7F3E2] w-full rounded-md py-2 px-4 flex items-center gap-2 justify-between">
                <div className="border-r border-solid border-black">
                  <img className="pr-2 cursor-pointer" src="" />
                </div>
                <input
                  placeholder="Type your message..."
                  className="w-[100%] bg-[#D7F3E2] lg:w-[100%] outline-none"
                  
                />

                <img className="w-5" src="" />
              </div>
            </div>
            <div className="text-white w-10 bg-ecoGreen p-2 rounded-md cursor-pointer hidden sm:block">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
