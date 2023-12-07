import { useEffect, useState } from "react"
import { getDogs } from "../apiManager"

export const DogDropdown = ({ walkerAndCities }) => {
    console.log("🚀 ~ file: DogDropdown.js:5 ~ DogDropdown ~ walkerId:", walkerAndCities.id)

    const [dogs, setDogs] = useState([])

    const handleGetDogs = () => {
        getDogs().then((data) => {
            const filteredDogs = data.filter((datum) =>
                walkerAndCities.walkerCities.some((walkerCity) => walkerCity.cityId === datum.cityId && datum.walkerId !== walkerAndCities.id)
            )
            setDogs(filteredDogs)
        })
    }

    useEffect(() => { handleGetDogs() }, [])

    return (
        <select>
            <option>assign a dog to walker</option>
            {dogs.map((dog, index) => (
                <option key={index}>{dog.name}</option>
            ))}
        </select>
    )
}