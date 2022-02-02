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
      target="_blank"
      className="relative overflow-hidden grid grid-cols-12 bg-black hover:bg-pink-600 transition-all duration-700 ease-in-out text-white my-5">
      <div
        className={`col-span-4 w-auto h-72 bg-white sm:flex justify-center items-center hidden ${
          index % 2 === 0 ? 'order-2' : 'order-1'
        }`}>
        <img src={work.img} className="object-cover sm:p-3 md:p-4 xl:p-16" alt="" />
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
