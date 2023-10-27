import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { id, name, hp, sprites } = pokemon
  const [toggle, setToggle] = useState(true)
  const handleFlipCardClick = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <Card>
      {toggle ?
        <div onClick={handleFlipCardClick}>
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
        :
        <img src={sprites.back} alt="oh no!" onClick={handleFlipCardClick}/>
      }
    </Card>
  );
}

export default PokemonCard;
