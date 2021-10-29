import React from "react";
import { Line } from "react-chartjs-2";

function HourlyLineChart({ chartData, xAxisLabel, maxTempValue }) {
  return (
    <>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14,
                  color: "#ffca28",
                },
              },
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: xAxisLabel,
                font: {
                  size: 18,
                },
              },
              ticks: {
                color: "#ffca28",
                font: {
                  size: 14,
                },
              },
              grid: {
                color: "rgba(255,255,255,0.3)",
              },
            },
            y: {
              max: maxTempValue,
              display: true,
              title: {
                display: true,
                text: "Temperature in Farenheit",
                font: {
                  size: 18,
                },
              },
              ticks: {
                color: "#ffca28",
                font: {
                  size: 14,
                },
              },
              grid: {
                color: "rgba(255,255,255,0.3)",
              },
            },
          },
        }}
      />
    </>
  );
}

export default HourlyLineChart;
