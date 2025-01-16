import React from "react";
const CircularProgressBar = ({ percentage }) => {
  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="25"
          strokeWidth="4"
          className="text-gray-200"
          fill="none"
          stroke="currentColor"
        />
        <circle
          cx="50%"
          cy="50%"
          r="25"
          strokeWidth="4"
          className="text-green-500"
          fill="none"
          stroke="currentColor"
          strokeDasharray="157"
          strokeDashoffset={`${157 - (157 * percentage) / 100}`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
        {percentage}%
      </span>
    </div>
  );
};

const CropCard = ({ image, cropName, price, durationPercentage }) => {
  return (
    <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex flex-col items-center p-4 m-4 space-y-4">
      <img
        src={image}
        alt={cropName}
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold">{cropName}</h3>
      <p className="text-gray-600">
        <span className="font-bold text-green-600">${price}</span>
      </p>
      <CircularProgressBar percentage={durationPercentage} />
    </div>
  );
};

export default CropCard;
