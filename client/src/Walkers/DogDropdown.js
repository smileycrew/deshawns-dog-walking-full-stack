import { useEffect, useState } from "react"
import { getDogs } from "../apiManager"

export const DogDropdown = () => {

    const [dogs, setDogs] = useState([])

    const handleGetDogs = () => { getDogs().then((data) => setDogs(data)) }

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