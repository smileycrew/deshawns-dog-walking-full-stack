import { useEffect, useState } from "react"
import { getWalkerAndCities } from "../apiManager"
import { DogDropdown } from "./DogDropdown"

export const AssignDogToWalker = ({ walkerId }) => {
    const [viewDogs, setViewDogs] = useState(false)
    const [walkerAndCities, setWalkerAndCities] = useState([])

    const handleViewDogs = () => { setViewDogs(!viewDogs) }
    const handleGetWalkerCities = () => { getWalkerAndCities(walkerId).then((data) => setWalkerAndCities(data)) }

    useEffect(() => {
        handleGetWalkerCities()
    }, [])

    return (
        <>
            {viewDogs === false ?
                <button className="bg-blue-500 hover:bg-blue-400 rounded-md text-white w-36" onClick={handleViewDogs}>add dog to walker</button> :
                <DogDropdown walkerAndCities={walkerAndCities} />
            }
        </>
    )
}