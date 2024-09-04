import React from "react";

export function Logo({
  className,
  glow,
}: {
  className?: string;
  glow?: boolean;
}): JSX.Element {
  return (
    <svg
      viewBox="0 0 78 38"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {glow && (
        <path
          d="M63.5,22.3294a19.5,19.5,0,0,0-39,0"
          stroke="url(#logoGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="blur-[2px]"
        />
      )}
      <path
        d="M63.5,22.3294a19.5,19.5,0,0,0-39,0"
        stroke="url(#logoGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#blur)"
      />
      {glow && (
        <path
          d="M38.4694,26.593a6.9229,6.9229,0,0,0,9.79-9.7905"
          stroke="url(#logoGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="blur-[2px]"
        />
      )}
      <path
        d="M38.4694,26.593a6.9229,6.9229,0,0,0,9.79-9.7905"
        stroke="url(#logoGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {glow && (
        <path
          d="M43.25,33.1706a11.2273,11.2273,0,1,0,0-22.4545"
          stroke="url(#logoGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="blur-[2px]"
        />
      )}
      <path
        d="M43.25,33.1706a11.2273,11.2273,0,1,0,0-22.4545"
        stroke="url(#logoGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {glow && (
        <path
          d="M54.6024,32.2223a14.6374,14.6374,0,1,0-20.7-20.7"
          stroke="url(#logoGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="blur-[2px]"
        />
      )}
      <path
        d="M54.6024,32.2223a14.6374,14.6374,0,1,0-20.7-20.7"
        stroke="url(#logoGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {glow && (
        <text
          x="6"
          y="25"
          fontSize="12"
          fontFamily="Arial"
          fontWeight="bold"
          fill="url(#logoGradient)"
          className="blur-[3px]"
        >
          nextMotion
        </text>
      )}
      <text
        x="6"
        y="25"
        fontSize="12"
        fontFamily="Arial"
        fontWeight="bold"
        fill="white"
      >
        nextMotion
      </text>
    </svg>
  );
}
