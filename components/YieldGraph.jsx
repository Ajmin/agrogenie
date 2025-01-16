"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const YieldGraph = ({ data }) => {
  return (
    <div className="w-full h-60">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="crop" />
          <Tooltip />
          <Bar dataKey="yield" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YieldGraph;
