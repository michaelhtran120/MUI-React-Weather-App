import { Container } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";
import dateBuilder from "./Hooks/dateBuilder";

function LineChartContainer({ dailyActive, forecast }) {
  console.log(forecast);
  const dates = forecast.map((day) => {
    return `${new Date(day.dt * 1000).getMonth() + 1}/${new Date(
      day.dt * 1000
    ).getDate()}`;
  });
  console.log(dates);
  const dailyMaxTemp = forecast.map((day) => Math.round(day.temp.max));
  const dailyMinTemp = forecast.map((day) => Math.round(day.temp.min));
  console.log(dailyMaxTemp);
  console.log(dailyMinTemp);

  let chartData = {
    labels: dates,
    datasets: [
      {
        label: "Min Temp",
        data: dailyMinTemp,
        backgroundColor: "rgba(207, 216, 220, 0.5)",
        borderColor: "rgba(207, 216, 220, 0.5)",
        borderWidth: 2,
        fill: true,
        pointBorderWidth: 3,
        pointHoverBorderWidth: 6,
      },
      {
        label: "Max Temp",
        data: dailyMaxTemp,
        backgroundColor: "#ffca28",
        borderColor: "#ffca28",
        borderWidth: 2,
        pointBorderWidth: 3,
        pointHoverBorderWidth: 6,
      },
    ],
  };

  return (
    <Container>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Dates",
              },
              ticks: {
                color: "#ffca28",
              },
            },
            y: {
              max: 100,
              display: true,
              title: {
                display: true,
                text: "Temperature in Farenheit",
              },
              ticks: {
                color: "#ffca28",
              },
            },
          },
        }}
      />
    </Container>
  );
}

export default LineChartContainer;
