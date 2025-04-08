




function App () {
  const handleChange = (event) => {
    // log the whole event
    console.log(event);
    // value of what is typed
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

export default App