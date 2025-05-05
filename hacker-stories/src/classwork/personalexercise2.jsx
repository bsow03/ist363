const list = [
    {
        title: 'React',
        url: 'https://react.dev/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://reduz.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 4,
        objectID: 1,
    }
]

const mappedList = list.map(function (list) {
    return list.title;
})

function App() {
  return (
  <div>
    <h1> My Hacker Stories</h1>

    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    
  </div>
  );
}

export default App;