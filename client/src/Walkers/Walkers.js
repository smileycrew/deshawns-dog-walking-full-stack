import { useEffect, useState } from "react"
import { getWalkers } from "../apiManager"
import { CityDropdown } from "./CityDropdown"
import { DeleteWalker } from "./DeleteWalker"
import { AssignDogToWalker } from "./AssignDogToWalker"
import { Link } from "react-router-dom"

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
                        <img className="h-40 w-40" src={walker.imageURL} alt="" />
                        <p><Link to={`/walkers/${walker.id}/manage-cities`}>{walker.name}</Link></p>
                        <AssignDogToWalker walkerId={walker.id} />
                        <DeleteWalker walkerId={walker.id} handleGetWalkers={handleGetWalkers} />
                    </li>
                ))}
            </ul>
        </>
    )
}