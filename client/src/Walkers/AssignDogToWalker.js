import { useEffect, useState } from "react"
import { getDogs, getWalkerCities } from "../apiManager"
import { DogDropdown } from "./DogDropdown"

export const AssignDogToWalker = ({ walkerId }) => {
    const [viewDogs, setViewDogs] = useState(false)
    const [walkerCities, setWalkerCities] = useState([])

    const handleViewDogs = () => { setViewDogs(!viewDogs) }
    const handleGetWalkerCities = () => { getWalkerCities(walkerId).then((data) => setWalkerCities(data)) }

    useEffect(() => {
        handleGetWalkerCities()
    }, [])

    return (
        <>
            {viewDogs === false ?
                <button className="bg-blue-500 hover:bg-blue-400 rounded-md text-white w-36" onClick={handleViewDogs}>add dog to walker</button> :
                <DogDropdown />
            }
        </>
    )
}