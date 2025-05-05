// first thing to do if you want to use state is to import the state, 
// react only imports what it actually needs hence the faster loading time
import { useState } from "react";


// sets up useState, what variable, what function changes it, and what start value
const Home = () => {

  const {name, setName} = useState("Telly");

// function actually making dynamic change
let handleClick = () => {
  setName("Bouba");
}
return (
    <div className="home">
      <h1>Hello World</h1>
      {name}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}


export default Home;

/* Running code resulted in error */