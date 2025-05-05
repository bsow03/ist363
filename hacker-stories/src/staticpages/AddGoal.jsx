import {useState} from 'react';

function AddGoal({ setGoals }) {
    console.log('▶️ AddGoal render');
    const [form, setForm] = useState({ title: '', description: '', category: 'daily', difficulty: 1});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = {
            ...form,
            id: Date.now(),
            status: 'active',
            createdAt: new Date().toISOString(),
        };
        setGoals(prev => [...prev, newGoal]);
        setForm({title: '', description: '', category: 'daily', difficulty: 1});
    };
    return (
    <div className="p-4">
      <h1 className='pb-3 pt-1 text-center'>Add Goal</h1>
        <div className='bg-gray-600 p-4 mb-5'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 m-2">
            <span className='p-0 m-0'>Title: </span>
            <input placeholder='Title' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
            <span className='p-0 m-0'>Description: </span>
            <textarea placeholder='Description' value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
            <span className='p-0 m-0'>Duration: </span>
            <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                <option value="daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="Life">Life</option>
            </select>
            <span className='m-0 p-0'>Score: </span>
            <input type="number" min="1" max="5" value={form.difficulty} onChange={e => setForm({...form, difficulty: parseInt(e.target.value)})} />
            <button type='submit'>Add Goal</button>
        </form>
        </div>
    </div>
    )
}

export default AddGoal;