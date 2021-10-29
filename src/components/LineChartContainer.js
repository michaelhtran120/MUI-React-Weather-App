import { Container } from "@material-ui/core";
import React from "react";
import DailyLineChart from "./DailyLineChart";
import HourlyLineChart from "./HourlyLineChart";

function LineChartContainer({ dailyActive, forecast }) {
  let maxTempValue;
  let chartData;
  let xAxisLabel = "";

  if (dailyActive) {
    xAxisLabel = "Dates";

    const dates = forecast.map((day) => {
      return `${new Date(day.dt * 1000).getMonth() + 1}/${new Date(
        day.dt * 1000
      ).getDate()}`;
    });
    const dailyMaxTemp = forecast.map((day) => Math.round(day.temp.max));
    const dailyMinTemp = forecast.map((day) => Math.round(day.temp.min));

    if (dailyMaxTemp.find((temp) => temp > 100)) {
      maxTempValue = 120;
    } else {
      maxTempValue = 100;
    }

    chartData = {
      labels: dates,
      datasets: [
        {
          label: "Min Temp",
          data: dailyMinTemp,
          backgroundColor: "rgba(207, 216, 220, 0.5)",
          borderColor: "rgba(207, 216, 220, 0.5)",
          borderWidth: 1.5,
          fill: true,
          pointBorderWidth: 3,
          pointHoverBorderWidth: 6,
          tension: 0.325,
        },
        {
          label: "Max Temp",
          data: dailyMaxTemp,
          backgroundColor: "#ffca28",
          borderColor: "#ffca28",
          borderWidth: 1.5,
          pointBorderWidth: 3,
          pointHoverBorderWidth: 6,
          tension: 0.325,
        },
      ],
    };
  } else {
    xAxisLabel = "Time";

    const hours = forecast.map((hour) => {
      let time = new Date(hour.dt * 1000).getHours();
      if (time > 12) {
        return `${time - 12} PM`;
      } else {
        return `${time} AM`;
      }
    });
    const hourlyTemp = forecast.map((day) => Math.round(day.temp));

    if (hourlyTemp.find((temp) => temp > 100)) {
      maxTempValue = 120;
    } else {
      maxTempValue = 100;
    }

    chartData = {
      labels: hours,
      datasets: [
        {
          label: "Temperature in Farenheit",
          data: hourlyTemp,
          backgroundColor: "#ffca28",
          borderColor: "#ffca28",
          borderWidth: 1.5,
          pointBorderWidth: 3,
          pointHoverBorderWidth: 6,
          tension: 0.325,
        },
      ],
    };
  }

  return (
    <Container>
      {dailyActive ? (
        <DailyLineChart
          chartData={chartData}
          xAxisLabel={xAxisLabel}
          maxTempValue={maxTempValue}
        />
      ) : (
        <HourlyLineChart
          chartData={chartData}
          xAxisLabel={xAxisLabel}
          maxTempValue={maxTempValue}
        />
      )}
    </Container>
  );
}

export default LineChartContainer;
