export default function Navbar({setPage}) {
    return (
        <nav className="bg-gray-600 p-4 flex md:flex-row flex-col gap-5">
                <h1 className="text-4xl font-bold sm:italic content-center px-3 sm:text-center">Score!</h1>
                <button onClick={() => setPage('dashboard')} className="hover:bg-white hover:text-gray-700 hover:outline:gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-opacity-50 motion-safe:hover:scale-110">Home</button>
                <button onClick={() => setPage('add')} className="hover:bg-white hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-opacity-50 motion-safe:hover:scale-110">Add Goal</button>
                <button onClick={() => setPage('completed')} className="hover:bg-white hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:ring-opacity-50 motion-safe:hover:scale-110">Completed Goals</button>
        </nav>
    );
}

