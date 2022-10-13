import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})


  return (
    <>
        <div>
          <h3>Spaceship</h3>
          <div className="icon-container">
            
          </div>
        </div>
      </>
  )
}

export default StarshipPage