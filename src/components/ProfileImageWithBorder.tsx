import React from "react";
import Image from "next/image";

const circularText = "ፍስሃ ደስታ FISIHA DESTA • ".repeat(13);

export default function ProfileImageWithBorder() {
  return (
    <div className="relative flex items-center justify-center w-[22rem] h-[22rem]"> {/* Container for border */}
      {/* White circular layer */}
      <div className="absolute rounded-full bg-white w-80 h-80 z-10" />
      {/* Circular text border using SVG, outside the white circle */}
      <svg className="absolute w-[23rem] h-[23rem] z-20 rotate-text-circle" viewBox="0 0 368 368">
        <defs>
          <path
            id="circlePath"
            d="M 184, 184 m -170, 0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0"
          />
        </defs>
        <text fill="#fff" fontSize="10" fontWeight="bold"> {/* Even smaller text */}
          <textPath xlinkHref="#circlePath">{circularText}</textPath>
        </text>
      </svg>
      {/* Profile image, even larger and passes out of the circle, no shadow */}
      <div className="relative w-[26rem] h-[26rem] rounded-full overflow-visible z-30 -top-20"> {/* Even larger and shifted up more */}
        <Image
          src="/images/profile.png"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}