// src/components/PointsDashboard.jsx
import React from 'react';

export default function PointsDashboard({ goals }) {
  const now = new Date();
  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  let daily = 0, monthly = 0, allTime = 0;

  goals.forEach(goal => {
    if (goal.status === 'completed') {
      const completedAt = new Date(goal.completedAt);
      allTime += goal.difficulty;
      if (isSameDay(completedAt, now)) daily += goal.difficulty;
      if (completedAt.getFullYear() === now.getFullYear() &&
          completedAt.getMonth() === now.getMonth()) {
        monthly += goal.difficulty;
      }
    }
  });

  return (
    <div className="p-4 bg-gray-800 rounded mb-6">
      <h2 className="text-2xl mb-2 font-bold">Points</h2>
      <p>Today: <strong>{daily}</strong></p>
      <p>This Month: <strong>{monthly}</strong></p>
      <p>All Time: <strong>{allTime}</strong></p>
    </div>
  );
}
