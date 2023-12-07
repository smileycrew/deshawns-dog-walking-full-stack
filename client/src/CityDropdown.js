import { useEffect, useState } from "react"
import { getCities, getWalkerCities } from "./apiManager"

export const CityDropdown = ({ walkers, setWalkersToDisplay }) => {

    const [cities, setCities] = useState([])

    const handleChosenCity = (event) => {
        const cityId = event.target.value * 1
        getWalkerCities(cityId).then((data) => {
            const filteredWalkers = walkers.filter((walker) => data.some((datum) => datum.walkerId === walker.id))
            setWalkersToDisplay(filteredWalkers)
        })
    }

    const handleFetchCities = () => { getCities().then((data) => setCities(data)) }

    useEffect(() => {
        handleFetchCities()
    }, [])

    return (
        <select onChange={handleChosenCity}>
            <option>select a city</option>
            {cities.map((city, index) => (
                <option key={index} value={city.id}>{city.name}</option>
            ))}
        </select>
    )
}