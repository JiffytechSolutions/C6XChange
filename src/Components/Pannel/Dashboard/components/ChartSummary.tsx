import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Card } from 'jiffy-ui';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ChartSummary = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 200, 150, 300, 250, 400],
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { 
        position: 'top' as const 
      },
      tooltip: { 
        mode: 'index' as const, 
        intersect: false 
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Card header={{title: 'Performance Metrics'}}><Line data={data} options={options} /></Card>;
};

export default ChartSummary;
