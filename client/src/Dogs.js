import { useEffect, useState } from "react"
import { getDogs } from "./apiManager"

export const Dogs = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        getDogs().then((data) => { setDogs(data) })
    }, [])
    return (
        <ul>
            {dogs.map((dog) => (
                <li>
                    <img className="h-40 w-40" src={dog.imageURL} alt="" />
                    <p>{dog.name}</p>
                </li>
            ))}
        </ul>
    )
}