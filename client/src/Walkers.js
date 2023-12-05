import { useEffect, useState } from "react"
import { getWalkers } from "./apiManager"
import { CityDropdown } from "./CityDropdown"

export const Walkers = () => {

    const [walkers, setWalkers] = useState([])

    useEffect(() => {
        getWalkers().then((data) => setWalkers(data))
    }, [])
    return (
        <>
            <CityDropdown />
            <ul>
                {walkers.map((walker) => (
                    <li>
                        <img className="h-40 w-40" src={walker.imageURL} alt="" />
                        <p>{walker.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}