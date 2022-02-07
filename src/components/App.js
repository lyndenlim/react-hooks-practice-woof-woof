import React, { useEffect, useState } from "react";
import DogName from "./DogName"
import DogInfo from "./DogInfo"

function App() {
  const [dogs, setDogs] = useState([])
  const [dogInfo, setDogInfo] = useState("")
  const [isOff, setIsOff] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(res => res.json())
    .then(dogData => setDogs(dogData))
  }, [])

  const dogNameList = dogs.map(dog => {
    return <DogName 
    key={dog.id} 
    dogInfo={dog}
    handleClickedDog={handleClickedDog}
    />
  })

  function handleClickedDog(id) {
    const selectedDog = dogs.find(dog => {
      return dog.id === id 
    })
    setDogInfo(selectedDog)
  }

  function updatedDog(dog) {
    setDogInfo(dog)
  }

  function handleFilter() {
    setIsOff(isOff => !isOff)
  }
 
  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilter} id="good-dog-filter">{isOff ? "Filter good dogs: OFF" : "Filter good dogs: ON"}</button>
      </div>
      <div id="dog-bar">
        {dogNameList}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dogInfo={dogInfo} updatedDog={updatedDog}/>
        </div>
      </div>
    </div>
  );
}

export default App;
