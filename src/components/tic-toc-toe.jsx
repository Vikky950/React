import React, { useState } from "react";
import { TbSend } from "react-icons/tb";
import { FaEllipsisV } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";

import { CiImageOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


const projects = [
  { id: 1, name: "Website Design for a NGO on children's health", status: "~Open", count: 3 },
  { id: 2, name: "Website Design for a NGO on children's health", status: "~Ongoing" },
  { id: 3, name: "Website Design for a NGO on children's health", status: "" },
  { id: 4, name: "Website Design for a NGO on children's health", status: "~Closed" },
  { id: 5, name: "Website Design for a NGO on children's health", status: "~Closed" },
  
  { id: 1, name: "Website Design for a NGO on children's health", status: "~Open", count: 3 },
  { id: 2, name: "Website Design for a NGO on children's health", status: "~Ongoing" },
  { id: 3, name: "Website Design for a NGO on children's health", status: "" },
  { id: 4, name: "Website Design for a NGO on children's health", status: "~Closed" },
  { id: 5, name: "Website Design for a NGO on children's health", status: "~Closed" },

];

const ProjectDashboard = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (

    <div className="lg:flex lg:flex-col lg:space-y-1    lg:w-[90%] lg:justify-self-center">
     <button className="text-lg font-semibold  relative left-48 text-start">My Projects</button>

      <div className=" lg:flex lg:h-screen lg:space-x-5 lg:justify-center   lg:w-full  lg:relative lg:justify-self-center">
        {/* Sidebar */}
        <div className=" lg:w-[28%]  bg-[#D8F6E4] p-4 rounded-lg relative flex flex-col mb-14">


          <div className="space-y-3 flex-col  overflow-auto   h-[500px] scrollbar-hidden">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-3  rounded-lg cursor-pointer ${selectedProject.id === project.id ? "bg-white" : "bg-white"
                  } border`}
                  >
                < div className="font-semibold  flex justify-end    ">{project.name}
                {project.count && (
                    <span className=" mt-1 bg-[#1DB559] lg:sticky  text-white  text-center text-xs rounded-full ml-2  w-8 h-7 p-1" >{project.count}</span>
                  )}
              
                </div>
                <p className={`text-sm ${project.status === "~Closed" ? "text-[#F20E0E]": project.status ==="~Open" ?"text-[#1DB559]" : "text-[#000000]"}`}>
                  {project.status}
                 
                </p>
              </div>
              

            ))}
          </div>
          <button className="absolute bottom-20 right-6   bg-[#D8F6E4] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
           <img src="photos1.png" alt="" className= " " />
          </button>
        </div>
        
    

    
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
             <FaEllipsisV/>
            </div>
            <div className="-mt-8 w-44 flex items-center justify-start text-sm sm:text-md">
              <img className="w-6 pr-2" src="Bagman2.png" />
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
                 
                </div>
                <input
                  placeholder="Type your message..."
                  className="w-[100%] bg-[#D7F3E2] lg:w-[100%] outline-none"
                  
                  
                />

                <img className="w-5" src= />
              </div>
            </div>
            <div className="text-white w-10 bg-ecoGreen p-2 rounded-md cursor-pointer hidden sm:block">
              <img src={arrowdiagonal} />
            </div>
          </div>
        </div>
      </div>
    </div>
           {/* <div className="flex  justify-between items-center   gap-x-2 ">
                      
          
                      <div class=" relative lg:w-[55%] ">
                      
                        <input
                          type="search"
                          class="w-full pl-10 pr-10 py-2 border-2 rounded-lg 
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                       transition-colors   border-green-200 relative  right-2  left-peer  bg-[#D8F6E4]  "
                          placeholder=" Type your message..."
                          
                        />
          
                        <button class="absolute left-3 top-24 mt-3 translate-y-2/2 text- hover:text-gray-600 pt-5">
                          <CiImageOn size={20}/>
                        </button>
                        <hr  className="w-px bg-gray-700 h-6 relative left-9 top-12"/>
                        <button class="absolute right-3 top-24 mt-3 -translate-y-1/2 text-[#474747] hover:text-gray-600 pt-14 ">
                          <CiMicrophoneOn size={20}/>
                        </button>
                      </div>
                      <button className=" bg-[#1DB55980] p-2 rounded-lg  shadow-md flex items-center justify-center  text-[#292D32]  relative top-24  mb-5 mr-1">
                      <TbSend size={20} />
                    
                    </button>
                    </div> */}
            </div>
            </div>
           
    

  );
};

export default ProjectDashboard;
