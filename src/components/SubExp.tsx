import React from "react";
import { SiPluscodes } from "react-icons/si";
import LineAnimationTwo from "./LineAnimateTwo";

function SubExp({ company, jd, title, workDate }: JobDescription) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-base">{title}</h2>
        <h1 className="text-lg font-bold max-sm:text-base">{company}</h1>
        <h2 className="text-base">{workDate}</h2>
      </div>
      <div className="space-y-3">
        {jd.map((j) => {
          return <JobDescription jd={j} key={j} />;
        })}
      </div>
    </div>
  );
}

const JobDescription = ({ jd }: { jd: string }) => {
  return (
    <div className="flex space-x-6 max-sm:text-sm">
      {/* <LineAnimationTwo> */}
      <div className="mt-[0.38rem]">
        <SiPluscodes />
      </div>
      {/* </LineAnimationTwo> */}
      <div className="">{jd}</div>
    </div>
  );
};

export default SubExp;
