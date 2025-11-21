import React from "react";

const Progress = (skills) => {
  if (!skills || skills.length === 0) return null;
  return (
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">
            {skills.skill}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {skills.percent}
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
          <div
            className="bg-pink-500 h-full rounded-full"
            style={{ width: `${skills.percent}%` }}
          ></div>
        </div>
      </div>
  );
};

export default Progress;
