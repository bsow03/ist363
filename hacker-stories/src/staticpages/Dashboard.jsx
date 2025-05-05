import QuoteBlock from '../components/QuoteBlock';
import PointsDashboard from '../components/PointsDashboard';

function Dashboard({goals, quote, onComplete}) {
    console.log('▶️ Dashboard render, goals:', goals, 'quote:', quote);
    const activeGoals = goals.filter(g => g.status === 'active');

    return (
    <div>
      <QuoteBlock quote={quote} />
      <PointsDashboard goals={goals} />

      <h2 className="text-xl m-4 font-bold">Active Goals</h2>
      <div className="bg-gray-800 p-4 rounded space-y-2">
        {activeGoals.length === 0 && <p className="italic">No active goals.</p>}
        {activeGoals.map(goal => (
          <label key={goal.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              onChange={() => onComplete(goal.id)}
              className="form-checkbox"
            />
            <span>{goal.title} — {goal.difficulty} pts</span>
          </label>
        ))}
      </div>
    </div>
    )
}

export default Dashboard;