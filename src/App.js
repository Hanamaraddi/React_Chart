import { Bar } from "react-chartjs-2";
// import {
//   Chart,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   Legend,
//   Title,
//   Tooltip,
// } from "chart.js";

// Chart.register(LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip);

import { Chart } from "chart.js/auto";

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Expense Tracker",
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "2021 Expense",
      data: [
        10000, 8000, 9000, 18000, 5000, 12000, 7500, 4500, 10000, 11000, 6300,
        18000,
      ],
      backgroundColor: "pink",
    },
    {
      label: "2022 Expense",
      data: [
        8000, 15000, 3000, 7500, 12000, 2500, 4000, 2500, 15000, 8000, 6000,
        15000,
      ],
      backgroundColor: "red",
    },
  ],
};
function App() {
  return (
    <div className="App">
      <Bar options={options} data={data} />
    </div>
  );
}

export default App;
