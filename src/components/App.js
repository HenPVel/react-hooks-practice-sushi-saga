import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [emptyPlateArray, setEmptyPlateArray] = useState([])
  const [availableSushis, setAvailableSushis] = useState([])

  useEffect(fetchSushis,[])

  function emptyPlateAdd(sushiObject) {
    let newArray = [...emptyPlateArray, sushiObject ]
    setEmptyPlateArray(newArray)
  }

  function fetchSushis() {
    return (
      fetch(API)
      .then(response => response.json())
      .then( sushiArray => setAvailableSushis(sushiArray))
    )
  }


  return (
    <div className="app">
      <SushiContainer emptyPlateAdd={emptyPlateAdd} availableSushis={availableSushis}/>
      <Table plates={emptyPlateArray}/>
    </div>
  );
}

export default App;
