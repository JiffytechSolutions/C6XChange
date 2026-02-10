import React from 'react';
import './SummaryCard.css';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend,
  color = '#667eea'
}) => {
  return (
    <div className="summary-card">
      <div className="summary-card-header">
        <div className="summary-card-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div className="summary-card-title">{title}</div>
      </div>
      <div className="summary-card-content">
        <div className="summary-card-value">{value}</div>
        {trend && (
          <div className={`summary-card-trend ${trend.isPositive ? 'positive' : 'negative'}`}>
            <span className="trend-arrow">{trend.isPositive ? '↑' : '↓'}</span>
            <span className="trend-value">{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Export with dummy data for demonstration
export const DummySummaryCards = () => {
  const cards = [
    {
      title: 'Total Tokens',
      value: '1,234,567',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      trend: { value: '+12.5%', isPositive: true },
      color: '#667eea'
    },
    {
      title: 'Active Projects',
      value: '42',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2H5C3.89543 2 3 2.89543 3 4V8C3 9.10457 3.89543 10 5 10H9C10.1046 10 11 9.10457 11 8V4C11 2.89543 10.1046 2 9 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 2H15C13.8954 2 13 2.89543 13 4V8C13 9.10457 13.8954 10 15 10H19C20.1046 10 21 9.10457 21 8V4C21 2.89543 20.1046 2 19 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 14H5C3.89543 14 3 14.8954 3 16V20C3 21.1046 3.89543 22 5 22H9C10.1046 22 11 21.1046 11 20V16C11 14.8954 10.1046 14 9 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 14H15C13.8954 14 13 14.8954 13 16V20C13 21.1046 13.8954 22 15 22H19C20.1046 22 21 21.1046 21 20V16C21 14.8954 20.1046 14 19 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      trend: { value: '+8.2%', isPositive: true },
      color: '#764ba2'
    },
    {
      title: 'Trading Volume',
      value: '$2.4M',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      trend: { value: '+24.8%', isPositive: true },
      color: '#48bb78'
    },
    {
      title: 'Pending Verifications',
      value: '18',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V12C2 18 8 21.5 12 22C16 21.5 22 18 22 12V7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      trend: { value: '-5.3%', isPositive: false },
      color: '#f59e0b'
    }
  ];

  return (
    <div className="summary-cards-grid">
      {cards.map((card, index) => (
        <SummaryCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          trend={card.trend}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default SummaryCard;