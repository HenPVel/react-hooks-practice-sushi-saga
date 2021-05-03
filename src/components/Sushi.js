import React, {useState} from "react";

function Sushi(props) {
  const [isEaten, setIsEaten] = useState(false)

  function handleEaten() {
    setIsEaten(!isEaten)
  }

  return (
    <div className="sushi" onClick={e => props.balanceReduction(props.price)}>
      <div className="plate" onClick={e => props.emptyPlateAdd(props.price)}>
        {isEaten ? null : (
          <img
            src={props.img_url}
            alt={props.name + "Sushi"}
            width="100%"
            onClick={handleEaten}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
}

export default Sushi;
