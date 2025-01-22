<template>
  <div class="tip">
    <img src="@/assets/logos/costco.png" alt="Costco Logo" class="costco-logo">
    <div class="content-container">

      <p class="introduction">Welcome to the comprehensive guide on maximizing your savings at Costco. Whether you're buying in bulk or seeking exclusive deals, here's how you can benefit.</p>
      
      <!-- First Comparison Section -->
      <div class="comparison-section">
        <h3>Toilet Paper, Paper Towels, and Gas Price Comparison</h3>
        <div class="side-by-side">
          <div class="item">
            <h4>Costco</h4>
            <ul>
              <li><strong>Toilet Paper:</strong> $24.99 for 30 rolls (1200 sheets per roll) - $0.0021 per sheet</li>
              <li><strong>Paper Towels:</strong> $19.99 for 12 rolls (160 sheets per roll) - $0.0104 per sheet</li>
              <li><strong>Gas:</strong> $3.49 per gallon (average)</li>
            </ul>
          </div>
          <div class="item">
            <h4>Ralphs, Stater Brothers, Albertsons</h4>
            <ul>
              <li><strong>Toilet Paper:</strong> $12.99 for 12 rolls (200 sheets per roll) - $0.0054 per sheet (average)</li>
              <li><strong>Paper Towels:</strong> $7.99 for 6 rolls (80 sheets per roll) - $0.0166 per sheet (average)</li>
              <li><strong>Gas:</strong> $3.89 per gallon (average)</li>
            </ul>
          </div>
        </div>
        
        <div class="graph-section">
          <h4>Toilet Paper Price Comparison</h4>
          <canvas id="toiletPaperChart" width="400" height="200"></canvas>
        </div>
        
        <div class="graph-section">
          <h4>Paper Towels Price Comparison</h4>
          <canvas id="paperTowelsChart" width="400" height="200"></canvas>
        </div>
        
        <div class="graph-section">
          <h4>Gas Price Comparison</h4>
          <canvas id="gasChart" width="400" height="200"></canvas>
        </div>

        <div class="graph-section">
          <h4>Annual Savings Comparison</h4>
          <canvas id="annualSavingsChart" width="400" height="200"></canvas>
        </div>

        <p class="conclusion">
          After comparing the costs for toilet paper, paper towels, and gas, it's evident that shopping at Costco can lead to significant savings annually. Here's the breakdown:
          <br><br>
          - <strong>Toilet Paper:</strong> At Costco, 60 rolls at 160 sheets per roll cost $20.16 per year, while the same amount at other stores would be $51.84, saving you $31.68.
          <br>
          - <strong>Paper Towels:</strong> With 30 rolls at 80 sheets per roll, Costco's price comes to $24.96 per year, compared to $39.84 at other stores, resulting in a $14.88 saving.
          <br>
          - <strong>Gas:</strong> For 300 gallons, Costco's rate of $3.49 per gallon totals $1,047 annually, whereas at other stores at $3.89 per gallon, it would be $1,167, offering a $120 saving.
          <br><br>
          In total, by choosing Costco for these items, you could save approximately <strong>$166.56</strong> per year. This saving alone far exceeds the cost of the $65 Costco membership for two members, clearly demonstrating that the membership fee is not only justified but also offers substantial financial benefits over time.
        </p>
      </div>
  </div>
</div>

</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
  name: 'Tip1',
  mounted() {
    Chart.register(...registerables);
    this.createToiletPaperChart();
    this.createPaperTowelsChart();
    this.createGasChart();
    this.createAnnualSavingsChart(); // New method for the annual savings chart
  },
  methods: {
    createToiletPaperChart() {
      new Chart(document.getElementById('toiletPaperChart'), {
        type: 'bar',
        data: {
          labels: ['Average', 'Costco'],
          datasets: [{
            label: 'Price per Sheet ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 235, 162, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 235, 162)'],
            borderWidth: 1,
            data: [0.0054, 0.0021] // Swapped data to match labels
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Price per Sheet ($)'
              }
            }
          }
        }
      });
    },

    createPaperTowelsChart() {
      new Chart(document.getElementById('paperTowelsChart'), {
        type: 'bar',
        data: {
          labels: ['Average', 'Costco'],
          datasets: [{
            label: 'Price per Sheet ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 235, 162, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 235, 162)'],
            borderWidth: 1,
            data: [0.0166, 0.0104] // Swapped data to match labels
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Price per Sheet ($)'
              }
            }
          }
        }
      });
    },

    createGasChart() {
      new Chart(document.getElementById('gasChart'), {
        type: 'bar',
        data: {
          labels: ['Average', 'Costco'],
          datasets: [{
            label: 'Price per Gallon ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 235, 162, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 235, 162)'],
            borderWidth: 1,
            data: [3.89, 3.49] // Swapped data to match labels
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Price per Gallon ($)'
              }
            }
          }
        }
      });
    },

    createAnnualSavingsChart() {
      new Chart(document.getElementById('annualSavingsChart'), {
        type: 'bar',
        data: {
          labels: ['Average Stores', 'Costco'],
          datasets: [{
            label: 'Annual Cost ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 235, 162, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 235, 162)'],
            borderWidth: 1,
            data: [1258.68, 1092.12] // Swapped positions of data
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Annual Cost ($)'
              }
            }
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.tip {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.costco-logo {
  max-width: 150px; /* Adjust size as necessary */
  display: block;
  margin: 0 auto 20px;
}

.content-container {
  max-height: 70vh; /* Adjust this value to fit your layout */
  overflow-y: auto; /* Adds scroll when content exceeds max-height */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.introduction, .conclusion {
  line-height: 1.6;
  margin-bottom: 20px;
}

.comparison-section {
  margin-bottom: 30px;
}

.conclusion {
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  line-height: 1.6;
}

.side-by-side {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;
}

.item {
  flex: 1;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
}

.item h4 {
  margin-bottom: 10px;
}

.item ul {
  list-style-type: none;
  padding: 0;
}

.item li {
  margin-bottom: 5px;
}

.graph-section {
  text-align: center;
  margin-bottom: 20px;
}

.graph-section h4 {
  margin-bottom: 10px;
}
</style>