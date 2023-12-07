import { useEffect, useState } from "react"
import { getDogs } from "../apiManager"
import { Link } from "react-router-dom"
import { DeleteDog } from "./DeleteDog"

export const Dogs = () => {
    const [dogs, setDogs] = useState([])

    const handleGetDogs = () => { getDogs().then((data) => { setDogs(data) }) }

    useEffect(() => {
        handleGetDogs()
    }, [])
    return (
        <ul>
            <Link to={"/dog/add"}><button className="bg-green-500 hover:bg-green-400 rounded text-white w-24">add dog</button></Link>
            {dogs.map((dog, index) => (
                <li key={index}>
                    <img className="h-40 w-40" src={dog.imageURL} alt="" />
                    <p><Link to={`/dog/${dog.id}`}>{dog.name}</Link></p>
                    <DeleteDog dogId={dog.id} handleGetDogs={handleGetDogs} />
                </li>
            ))}
        </ul>
    )
}