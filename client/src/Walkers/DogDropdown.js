import { useEffect, useState } from "react"
import { assignDog, getDogs } from "../apiManager"
import { useNavigate } from "react-router-dom"

export const DogDropdown = ({ walkerAndCities }) => {

    const navigate = useNavigate()

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
        assignDog(dogToAssign.id, walkerAndCities.id).then((data) => navigate(`/dog/${data.id}`))
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