import React, { useEffect, useState } from 'react';
import DisplayName from './components/DisplayName';
import Footer from './components/Footer';
import { firstNames, lastNames, generateName } from './utils/nameGenerator';
import './App.css';


function App() {
  const [race, setRace] = useState("human");
  const [classType, setClassType] = useState("fighter");
  const [name, setName] = useState("");

  //get the object keys for both arrays
  const races = Object.keys(firstNames);
  const classes = Object.keys(lastNames);

  console.log('races = ', races);
  console.log('classes = ', classes);
  
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
            {races.map((r) => (
              <option key={r} value={r}>
                {/*The following capitalizes the first letter of the key name so it looks better when displayed*/}
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </option>
            ))}
            
          </select>
        </label>

        <label>
          Select Class 
          <select value={classType} onChange={(e) => {setClassType(e.target.value)}}>
            {classes.map((c) => (
              <option key={c} value={c}>
                {/*The following capitalizes the first letter of the key name so it looks better when displayed*/}
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
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
