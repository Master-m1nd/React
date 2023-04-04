import React, { useState } from "react";
const heartIcon = '../../../images/heart.svg';

function HeartButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(current => !current);
    };
    let className = `heartBtn-${isActive ? 'red' : 'white'}`;
    return(
      <>
        <img 
          src={heartIcon} 
          alt="heart" 
          className={`${className}`}
          onClick={handleClick}
        />
      </>
    )
}


export default HeartButton;