import { useState, useEffect } from "react";
import { getAllStarships } from "../../../services/sw-api.js";
import { Link } from "react-router-dom";



const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  return (
    <>
      <div>
        <h3>Starship List</h3>
        {starships.map(starship => 
            <Link
              key={starship.name}
              to='/starship'
              state= {{ starship }}
            >
            {starship.name}
            </Link>
          )}
      </div>
    </>
  )
}



export default StarshipList