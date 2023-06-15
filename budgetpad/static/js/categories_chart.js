"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Get the chart data from the JSON object
  let chartData = "{{ chart_data_json }}";

  // Create the pie chart
  let ctx = document.getElementById("categoryChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          data: chartData.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            // Add more colors as needed
          ],
        },
      ],
    },
    options: {
      // Add any additional chart options here
    },
  });
});
