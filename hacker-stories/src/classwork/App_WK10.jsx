import './App.css'

const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

const customFilter = (arr, predicate) => {
  return arr.reduce((acc, item) => {
      if (predicate(item)) {
          acc.push(item);
      }
      return acc;
  }, []);
};

let filtered = customFilter(students, student => student.name === "Sue Flay");
console.log(filtered);

function App() {
  return (
    <div>
      <h1>Students</h1>
      <StudentsInfo/>
      <button onClick={() => ButtonMessage("Button clicked.")}>Click Me!</button>
      </div>
      
    );
}

function StudentsInfo() {
  return (
    <div>
      <ul>
        {
          students.map((student) => (
            <li key={student.suid}>
              <p>Name: {student.name} </p>
              <p>Year: {student.year} </p>
              <p>Major: {student.major} </p>
            </li>
          ))}
        </ul>
    </div>
  )
}

function ButtonMessage(message) {
    console.log(message);
}

export default App;
