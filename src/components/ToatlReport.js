import { EllipsisVertical } from "lucide-react";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function ToatlReport() {
  const data = [
    { day: "Mon", value: 0 },
    { day: "Tue", value: 18 },
    { day: "Wed", value: 18 },
    { day: "Thu", value: 37 },
    { day: "Fri", value: 32 },
    { day: "Sat", value: 27 },
    { day: "Sun", value: 30 },
  ];

  return (
    <div className="bg-white shadow-md justify-between mb-5 md:mb-0 flex rounded py-3 px-3 md:px-6 md:py-4 h-auto w-full md:w-[580px]">
      <div className="w-full">
        <div className="flex justify-between w-full items-center">
          <span>
            <h3 className="text-sm md:text-[18px] font-semibold text-[#23272E]">
              Reports
            </h3>
            <p className="text-xs md:text-sm text-[#8B909A] font-medium">Last 7 Days</p>
          </span>
          <span>
            <EllipsisVertical />
          </span>
        </div>
        <div className="mt-6">
          <div className="flex gap-6 whitespace-nowrap overflow-scroll md:overflow-hidden">
            <span className="hover:border-b-2 hover:border-spacing-1 hover:border-b-[#0F60FF]">
              <h3 className="text-base md:text-[24px] font-bold text-[#23272E]">24k</h3>
              <p className="text-[13px] text-[#8B909A] font-medium">Customers</p>
            </span>
            <span className="hover:border-b-2 hover:border-spacing-1 hover:border-b-[#0F60FF]">
              <h3 className="text-base md:text-[24px] font-bold text-[#23272E]">3.5k</h3>
              <p className="text-[13px] text-[#8B909A] font-medium">Total Products</p>
            </span>
            <span className="hover:border-b-2 hover:border-spacing-1 hover:border-b-[#0F60FF]">
              <h3 className="text-base md:text-[24px] font-bold text-[#23272E]">2.5k</h3>
              <p className="text-[13px] text-[#8B909A] font-medium">Stock Products</p>
            </span>
            <span className="hover:border-b-2 hover:border-spacing-1 hover:border-b-[#0F60FF]">
              <h3 className="text-base md:text-[24px] font-bold text-[#23272E]">0.5k</h3>
              <p className="text-[13px] text-[#8B909A] font-medium">Out of Stock</p>
            </span>
            <span className="hover:border-b-2 hover:border-spacing-1 hover:border-b-[#0F60FF]">
              <h3 className="text-base md:text-[24px] font-bold text-[#23272E]">250k</h3>
              <p className="text-[13px] text-[#8B909A] font-medium">Revenue</p>
            </span>
          </div>
        </div>
        <div className="mt-6 w-full md:w-[500px] h-[220px] md:h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{right: 30}}>
            <XAxis dataKey="day" axisLine={true} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10, 20, 30, 40, 50]}
              domain={[0, 50]}
              tickFormatter={(value) => `${value}K`}
            />
            <Tooltip formatter={(value) => `${value}K`} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0F60FF"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ToatlReport;
