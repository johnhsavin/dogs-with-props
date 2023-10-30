import './App.css';
import Dog from './components/Dog';

const dogs = [
  { name: "Ryder", age: 4, breed: "Police Dog" },
  { name: "Rubble", age: 4, breed: "Work Dog" },
  { name: "Marshall", age: 4, breed: "Firefighter Dog", deceased: true },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dogs:</h1>

        {dogs.map(dog => <Dog key={dog.name} age={dog.age} name={dog.name} breed={dog.breed} deceased={dog.deceased} />)}
        {/* <Dog age={4} name="Ryder" breed="Police Dog" />
        <Dog age={8} name="Rubble" breed="Worker Dog" />
        <Dog age={12} name="Marshall" breed="Firefighter Dog" /> */}
        
      </header>
    </div>
  );
}

export default App;
