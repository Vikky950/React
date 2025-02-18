import React from "react";

function ProjectCard1({ title, participants, status }) {
  return (
    <div className="bg-[#FFFFFF] w-[95%] pr-2 p-2 border rounded-xl h-[6rem] sm:h-auto mb-2">
      <div className="flex mb-3 w-full">
        <p className=" sm:text-lg text-md w-full">{title}</p>
        <div className="w-[5%] mr-4">
          <p className="w-[30px] h-[30px] sticky text-white bg-[#1DB559] rounded-full sm:text-base text-sm p-1 font-semibold text-center">
            {participants}
          </p>
        </div>
      </div>
      <small className="text-[#1DB559]">~{status}</small>
    </div>
  );
}

export default ProjectCard1;
