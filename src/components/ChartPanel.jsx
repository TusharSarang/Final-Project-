import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartPanel = ({ data }) => {
  const labels = data.map(repo => repo.name);
  const stars = data.map(repo => repo.stargazers_count);
  const forks = data.map(repo => repo.forks_count);
  const issues = data.map(repo => repo.open_issues_count);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Repository Statistics</h2>
      <Bar data={{
        labels,
        datasets: [
          { label: 'Stars', data: stars, backgroundColor: '#3b82f6' },
          { label: 'Forks', data: forks, backgroundColor: '#10b981' },
          { label: 'Issues', data: issues, backgroundColor: '#f59e0b' },
        ],
      }} />
    </div>
  );
};

export default ChartPanel;