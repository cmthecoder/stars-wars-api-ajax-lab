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
      <div className="starships">
        <div>
        {starships.map(starship => 
            <Link
              key={starship.name}
              to='/starship'
              state= {{ starship }}
            >
            <button>
              {starship.name}
            </button>
            </Link>
          )}
          </div>
      </div>

    </div>
    </>
  )
}



export default StarshipList