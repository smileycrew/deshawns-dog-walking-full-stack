import { useEffect, useState } from "react"
import { getWalkers } from "../apiManager"
import { CityDropdown } from "./CityDropdown"
import { DeleteWalker } from "./DeleteWalker"
import { AssignDogToWalker } from "./AssignDogToWalker"

export const Walkers = () => {

    const [walkers, setWalkers] = useState([])
    const [walkersToDisplay, setWalkersToDisplay] = useState([])

    const handleGetWalkers = () => {
        getWalkers().then((data) => {
            setWalkers(data)
            setWalkersToDisplay(data)
        })
    }

    useEffect(() => {
        handleGetWalkers()
    }, [])

    return (
        <>
            <CityDropdown walkers={walkers} setWalkersToDisplay={setWalkersToDisplay} />
            <ul>
                {walkersToDisplay.map((walker, index) => (
                    <li key={index}>
                        <img className="h-40 w-40" src={walker?.imageURL} alt="" />
                        <p>{walker?.name}</p>
                        <AssignDogToWalker walkerId={walker.id} />
                        <DeleteWalker walkerId={walker.id} handleGetWalkers={handleGetWalkers} />
                    </li>
                ))}
            </ul>
        </>
    )
}