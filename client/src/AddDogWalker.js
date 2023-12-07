import { useEffect, useState } from "react"
import { getDogs, getWalkerCities } from "./apiManager"

export const AddDogWalker = ({ walkerId }) => {
    const [displayDogs, setDisplayDogs] = useState(false)
    const [dogs, setDogs] = useState([])
    const [walkerCities, setWalkerCities] = useState([])

    const handleDisplayDogs = () => { setDisplayDogs(!displayDogs) }
    const handleFetchDogs = () => { getDogs().then((data) => setDogs(data)) }
    const handleFetchWalkerCities = () => { getWalkerCities(walkerId).then((data) => setWalkerCities(data)) }

    useEffect(() => {
        handleFetchDogs()
        handleFetchWalkerCities()
    }, [])

    return (
        <>
            {displayDogs === false ?
                <button className="bg-blue-500 hover:bg-blue-400 rounded-md text-white w-36" onClick={handleDisplayDogs}>add dog to walker</button> :
                <select>
                    <option>assign a dog to walker</option>
                    {dogs.map((dog, index) => (
                        <option key={index}>{dog.name}</option>
                    ))}
                </select>
            }
        </>
    )
}