import { useEffect, useState } from "react"
import { getDogs } from "../apiManager"

export const DogDropdown = ({ walkerAndCities }) => {

    const [dogs, setDogs] = useState([])

    const handleGetDogs = () => {
        getDogs().then((data) => {
            // filtered the dogs by city and NOT assigned to the walker
            const filteredDogs = data.filter((datum) =>
                walkerAndCities.walkerCities.some((walkerCity) => walkerCity.cityId === datum.cityId && datum.walkerId !== walkerAndCities.id)
            )
            setDogs(filteredDogs)
        })
    }
    const handleAssignDog = (event) => {
        const dogToAssign = dogs.find((dog) => dog.id === event.target.value * 1)
    }

    useEffect(() => { handleGetDogs() }, [])

    return (
        <select onChange={handleAssignDog}>
            <option>assign a dog to walker</option>
            {dogs.map((dog, index) => (
                <option key={index} value={dog.id}>{dog.name}</option>
            ))}
        </select>
    )
}