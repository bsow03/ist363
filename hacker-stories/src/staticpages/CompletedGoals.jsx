// src/staticpages/CompletedGoals.jsx
import React from 'react';

function CompletedGoals({ goals }) {
  const completed = goals.filter(g => g.status === 'completed');

  return (
    <div>
      <h1 className="text-2xl m-4 text-center font-bold">Completed Goals</h1>
      {completed.length === 0 && <p className='text-center'>No goals completed yet.</p>}
      {completed.map(goal => (
        <div key={goal.id} className="mb-2 p-2 border rounded bg-gray-800">
          <h3>{goal.title}</h3>
          <p>Completed on: {new Date(goal.completedAt).toLocaleDateString()}</p>
          <p>Points: {goal.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default CompletedGoals;
