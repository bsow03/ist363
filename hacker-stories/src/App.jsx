import { useState } from 'react';
import useZenQuotes from './hooks/useZenQuotes';
import Navbar from './components/Navbar';
import Dashboard from './staticpages/Dashboard';
import AddGoal from './staticpages/AddGoal';
import CompletedGoals from './staticpages/CompletedGoals';
import Footer from './components/Footer';

function App() {
  const [view, setView] = useState('dashboard');
  const [goals, setGoals] = useState([]); // Store all goals here
  const quotes = useZenQuotes();        // ← plug key
  console.log(quotes);

  

  // ① Mark a goal completed, timestamp it, and fire an alert
  const handleComplete = id => {
    setGoals(prev =>
      prev.map(g =>
        g.id === id
          ? { ...g, status: 'completed', completedAt: new Date().toISOString() }
          : g
      )
    );
    const pts = goals.find(g => g.id === id)?.difficulty || 0;
    alert(`You scored! Congrats, you earned ${pts} points. Keep scoring!`);
  };


   // Choose one at random (or fallback)
   const todayQuote =
   quotes.length > 0
     ? quotes[Math.floor(Math.random() * quotes.length)]
     : { q: 'Loading inspirational quote…', a: '' };

  console.log('🔥 App mounted, view =', view);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar setPage={setView} />
      <main className="flex-1 p-4">
      {view === 'dashboard' && (
      <Dashboard
        goals={goals}
        quote={{ quote: todayQuote.q, author: todayQuote.a }}
        onComplete={handleComplete}
    />)}
      {view === 'add' && <AddGoal setGoals={setGoals}/>}
      {view === 'completed' && <CompletedGoals goals={goals}/>}
      </main>
      <Footer />
    </div>
  );
}

export default App; 