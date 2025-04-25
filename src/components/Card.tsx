'use client';
import React from "react";
import Link from "next/link";

const Card = ({index,
  title,
  description,
  imageUrl,
  link,
}: {
  index:number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}) => {
  return (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gradient-to-r from-purple-900 via-indigo-600 to-indigo-900 dark:border-gray-700">
    <a href={link}>
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />
    </a>
    <div className="p-5">
      <a href={link}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="inline-flex items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center">
  <Link href={link}  className="flex items-center">
    Read more 
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </Link>
</div>
    </div>
  </div>
);
}


export default Card;