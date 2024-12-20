import React from "react";
import styles from "styles/goal.module.css";

const GoalHeart = () => {
  return (
    <div className="goal-container flex items-start gap-3 mt-5">
      <div className="goal-icon">
        <svg
          viewBox="-4.8 -4.8 25.60 25.60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          width="40"
          height="40" 
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0">
            <rect
              x="-4.8"
              y="-4.8"
              width="25.60"
              height="25.60"
              rx="5.12"
              fill="rgb(235, 130, 115)"
              strokeWidth="0"
            ></rect>
          </g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </div>
      <div className="mt-1">
        <div className={`${styles['goal-text']}`}>
            <p className="text-s font-normal text-black">Goal</p>
            <p className="text-base font-semibold text-black">Build strong relationships</p>
        </div>
      </div>
    </div>
  );
};

export default GoalHeart;
