import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStarships } from "../../../services/sw-api.js";


const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarships
      (location.state.starship.url)
      setStarshipPage(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return (
    <>
        <div>
          <h2>Name: {starshipPage.name}</h2>
          <h2>Model: {starshipPage.model}</h2>
        </div>
      </>
  )
}

export default StarshipPage