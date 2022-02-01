import { Link } from 'gatsby';
import React from 'react';

interface WorkCardProps {
  index: number;
  work: {
    title: string;
    subtitle: string;
    link: string;
    img: string;
  };
}

const WorkCard: React.FC<WorkCardProps> = ({ work, index }) => {
  return (
    <Link
      to={work.link}
      className="grid grid-cols-12 bg-black hover:bg-pink-600 transition-all duration-700 ease-in-out text-white my-5">
      <div className={`col-span-4 hidden sm:block ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
        <img src={work.img} className="w-full object-cover" alt="" />
      </div>
      <div
        className={`${
          index % 2 === 0 ? 'order-1' : 'order-2'
        } col-span-12  sm:col-span-8 flex flex-col justify-center items-center py-5 sm:py-0`}>
        <h1 className="text-xs sm:text-sm md:text-base lg:text-2xl leading-10 font-black text-center">
          {work.title}
        </h1>
        <p className="text-xs text-opacity-60 text-white text-center px-2">{work.subtitle}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
