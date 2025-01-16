import React from "react";
import CropCard from "@/components/CropCard";
import YieldGraph from "@/components/YieldGraph";

const data = [
  { crop: "Rice", yield: 150 },
  { crop: "Barley", yield: 80 },
];

const dashboard = () => {
  return (
    <div class="flex flex-col w-full">
      <div class="m-10 ">
        <h2 className="text-lg font-bold text-center mb-4">Crops</h2>
        <div class="flex justify-start flex-row">
          <CropCard cropName="Rice" price="100" durationPercentage="10" />
          <CropCard cropName="Barney" price="100" durationPercentage="10" />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-center mb-4">
          Crop Yield Prediction Chart
        </h2>
        <YieldGraph data={data} />
      </div>
    </div>
  );
};

export default dashboard;
