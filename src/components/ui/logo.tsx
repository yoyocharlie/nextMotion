import React from "react";

export function Logo(): JSX.Element {
  return (
    <div>
      <span className="relative">
        <span className="text-lg font-bold">nextMotion</span>
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth="1"
          className="absolute -top-[1.2rem] left-[2.1rem] w-14"
        >
          <path
            d="M43.5,28.3294a19.5,19.5,0,0,0-39,0"
            stroke="#ffffff6a"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4694,32.593a6.9229,6.9229,0,0,0,9.79-9.7905"
            stroke="#ffffff6a"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.25,39.1706a11.2273,11.2273,0,1,0,0-22.4545"
            stroke="#ffffff6a"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.6024,38.2223a14.6374,14.6374,0,1,0-20.7-20.7"
            stroke="#ffffff6a"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
