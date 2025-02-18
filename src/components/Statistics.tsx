// src/components/Statistics.tsx
import React from "react";
import { TypingStats } from "../types";

interface StatisticsProps {
  stats: TypingStats;
}

export const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  return (
    <div className="statistics">
      <h3>Results</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <label>WPM:</label>
          <span>{stats.wpm}</span>
        </div>
        <div className="stat-item">
          <label>Accuracy:</label>
          <span>{stats.accuracy}%</span>
        </div>
        <div className="stat-item">
          <label>Errors:</label>
          <span>{stats.errors}</span>
        </div>
        <div className="stat-item">
          <label>Words:</label>
          <span>{stats.totalWords}</span>
        </div>
      </div>
    </div>
  );
};
