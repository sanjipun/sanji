import React from 'react';
import { WORK_CONSTANTS } from '../constants/WorkContents';
import WorkCard from './WorkCard';

const Works = () => {
  return (
    <div className="max-w-8xl w-full mx-auto grid grid-cols-12 mt-32 px-10">
      <div className="col-span-12 md:col-span-2">
        <button>Works</button>
      </div>
      <div className="col-span-12 md:col-span-10">
        {WORK_CONSTANTS.map((work, index) => (
          <WorkCard key={index} index={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
