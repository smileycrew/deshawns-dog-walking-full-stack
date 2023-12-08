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
                <button className="bg-blue-500 hover:bg-blue-400 rounded-md text-white w-24" onClick={handleViewDogs}>add dog</button> :
                <DogDropdown walkerAndCities={walkerAndCities} />
            }
        </>
    )
}