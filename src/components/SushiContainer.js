import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer(props) {
  
  const [rangeStart, setRangeStart] = useState(0)
  let balance = 100

function balanceReduction(price) {
  if (price < balance) {
    balance = balance - price
  }
}
  
  function getFourSushis() {
    let partialSushi = props.availableSushis.slice(rangeStart, rangeStart + 4)
    return partialSushi.map(sushi => <Sushi balance={balance} balanceReduction={balanceReduction} key={sushi.id} {...sushi} emptyPlateAdd={props.emptyPlateAdd} />)
  }

  function rangeChange() {
    setRangeStart(rangeStart+4)
  }

  return (
    <div className="belt">
      {getFourSushis()}
      <MoreButton rangeChange={rangeChange} />
    </div>
  );
}

export default SushiContainer;
