<template>
  <div class="tip">
    <h2>Costco</h2>
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
      </div>

      <!-- Second Comparison Section -->
      <div class="comparison-section">
        <h3>Costco vs. Regular Retail</h3>
        <div class="side-by-side">
          <div class="item">
            <h4>Costco</h4>
            <ul>
              <li>Lower prices on bulk items</li>
              <li>High-quality Kirkland brand</li>
              <li>Fewer but bulkier options</li>
            </ul>
          </div>
          <div class="item">
            <h4>Regular Retail</h4>
            <ul>
              <li>Smaller pack sizes at higher per-unit cost</li>
              <li>Wider variety of brands</li>
              <li>More frequent promotions on individual items</li>
            </ul>
          </div>
        </div>
        <div class="graph-section">
          <!-- Placeholder for graph -->
          <!-- <img src="@/assets/graphs/retail-comparison.png" alt="Retail Comparison Graph" class="graph"> -->
        </div>
      </div>

      <p class="conclusion">In conclusion, leveraging a Costco membership can significantly reduce your shopping expenses if you manage your purchases wisely. Bulk buying is key, but remember to assess your consumption habits to avoid waste.</p>
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
  },
  methods: {
    createToiletPaperChart() {
      new Chart(document.getElementById('toiletPaperChart'), {
        type: 'bar',
        data: {
          labels: ['Costco', 'Average'],
          datasets: [{
            label: 'Price per Sheet ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            borderWidth: 1,
            data: [0.0021, 0.0054]
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
          labels: ['Costco', 'Average'],
          datasets: [{
            label: 'Price per Sheet ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            borderWidth: 1,
            data: [0.0104, 0.0166]
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
          labels: ['Costco', 'Average'],
          datasets: [{
            label: 'Price per Gallon ($)',
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            borderWidth: 1,
            data: [3.49, 3.89]
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