import React, { useEffect, useState } from 'react';
import DisplayName from './components/DisplayName';
import Footer from './components/Footer';
import { generateName } from './utils/nameGenerator';
import './App.css';


function App() {
  const [race, setRace] = useState("human");
  const [classType, setClassType] = useState("fighter");
  const [name, setName] = useState("");
  
  //Regenerate name when race or classType changes
  useEffect(() => {
    const newName = generateName(race, classType);
    setName(newName);
  }, [race, classType])

  //Regenerate name when user clicks the regenerate button instead
  const handleReroll = () => {
    const newName = generateName(race, classType);
    setName(newName);
  }
  return (
    <div className='page-container'>
      <main className="App">
        <label>
          Select Race
          {/* update the race state whenever a new race is selected */}
          <select value={race} onChange={(e) => {setRace(e.target.value)}}>
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="tiefling">Tiefling</option>
          </select>
        </label>

        <label>
          Select Class 
          <select value={classType} onChange={(e) => {setClassType(e.target.value)}}>
            <option value="fighter">Fighter</option>
            <option value="rogue">Rogue</option>
            <option value="warlock">Warlock</option>
          </select>
        </label>

        <h3><i>Your {race} {classType} will henceforth be known as...</i></h3>
        <DisplayName name={name} />
        <button onClick={handleReroll}>reroll new {race} {classType} name</button>
      </main>   

      <Footer /> 
    </div>
  );
}

export default App;
