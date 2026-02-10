import React from 'react';
import './GreenScore.css';

interface GreenScoreProps {
  score?: number;
  maxScore?: number;
}

const GreenScore: React.FC<GreenScoreProps> = ({ score = 85, maxScore = 100 }) => {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 70; // radius = 70
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine color based on score
  const getScoreColor = (scoreValue: number) => {
    if (scoreValue >= 80) return '#48bb78'; // Green
    if (scoreValue >= 60) return '#f59e0b'; // Orange
    return '#f56565'; // Red
  };

  const scoreColor = getScoreColor(score);

  // Dummy metrics data
  const metrics = [
    { label: 'CO₂ Reduced', value: '2.4 tons', icon: '🌱' },
    { label: 'Energy Saved', value: '1,250 kWh', icon: '⚡' },
    { label: 'Trees Planted', value: '48', icon: '🌳' },
    { label: 'Water Saved', value: '3,500 L', icon: '💧' }
  ];

  return (
    <div className="green-score-container">
      <div className="green-score-header">
        <h3 className="green-score-title">Green Score</h3>
        <p className="green-score-subtitle">Your environmental impact</p>
      </div>

      <div className="green-score-content">
        <div className="score-circle-wrapper">
          <svg className="score-circle" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke={scoreColor}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="score-progress"
              style={{
                filter: `drop-shadow(0 0 8px ${scoreColor})`
              }}
            />
          </svg>
          <div className="score-value-wrapper">
            <div className="score-value" style={{ color: scoreColor }}>
              {score}
            </div>
            <div className="score-max">/ {maxScore}</div>
            <div className="score-label">Score</div>
          </div>
        </div>

        <div className="score-metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="metric-icon">{metric.icon}</div>
              <div className="metric-info">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="green-score-footer">
        <div className="score-badge" style={{ borderColor: scoreColor, color: scoreColor }}>
          <span className="badge-icon">🏆</span>
          <span className="badge-text">
            {score >= 80 ? 'Excellent Performance' : score >= 60 ? 'Good Performance' : 'Needs Improvement'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GreenScore;