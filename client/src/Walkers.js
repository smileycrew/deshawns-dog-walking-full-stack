import { useEffect, useState } from "react"
import { getWalkers } from "./apiManager"
import { CityDropdown } from "./CityDropdown"
import { AddDogWalker } from "./AddDogWalker"

export const Walkers = () => {

    const [walkers, setWalkers] = useState([])
    const [walkersToDisplay, setWalkersToDisplay] = useState([])

    useEffect(() => {
        getWalkers().then((data) => {
            setWalkers(data)
            setWalkersToDisplay(data)
        })
    }, [])

    return (
        <>
            <CityDropdown walkers={walkers} setWalkersToDisplay={setWalkersToDisplay} />
            <ul>
                {walkersToDisplay.map((walker, index) => (
                    <li key={index}>
                        <img className="h-40 w-40" src={walker?.imageURL} alt="" />
                        <p>{walker?.name}</p>
                        <AddDogWalker walkerId={walker.id} />
                    </li>
                ))}
            </ul>
        </>
    )
}