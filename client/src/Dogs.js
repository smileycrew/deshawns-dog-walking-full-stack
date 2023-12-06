import { useEffect, useState } from "react"
import { getDogs } from "./apiManager"
import { Link } from "react-router-dom"

export const Dogs = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        getDogs().then((data) => { setDogs(data) })
    }, [])
    return (
        <ul>
            {dogs.map((dog, index) => (
                <li key={index}>
                    <img className="h-40 w-40" src={dog.imageURL} alt="" />
                    <p><Link to={`/dog/${dog.id}`}>{dog.name}</Link></p>
                </li>
            ))}
        </ul>
    )
}