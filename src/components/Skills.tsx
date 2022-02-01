import React from 'react';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { MdWeb } from '@react-icons/all-files/md/MdWeb';
import { AiOutlineAntDesign } from '@react-icons/all-files/ai/AiOutlineAntDesign';
import { SiMaterialUi } from '@react-icons/all-files/si/SiMaterialUi';

const Skills = () => {
  return (
    <div className="bg-black text-white">
      <div className="py-32 px-10 max-w-8xl mx-auto grid grid-cols-12">
        <div className="col-span-2">Skills</div>
        <div className="col-span-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
            <FaReact className="w-20 h-20" />
            <SiTailwindcss className="w-20 h-20" />
            <SiJavascript className="w-20 h-20" />
            <SiTypescript className="w-20 h-20" />
            <MdWeb className="w-20 h-20" />
            <AiOutlineAntDesign className="w-20 h-20" />
            <SiMaterialUi className="w-20 h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
