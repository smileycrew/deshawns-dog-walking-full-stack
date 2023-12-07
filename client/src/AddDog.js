import { useEffect, useState } from "react"
import { addDog, getCities } from "./apiManager"
import { useNavigate } from "react-router-dom"

export const AddDog = () => {

    const navigate = useNavigate()

    const [cities, setCities] = useState([])
    const [dogToAdd, setDogToAdd] = useState({})

    const handleGetCities = () => { getCities().then((data) => setCities(data)) }
    const handleUserChoice = (event) => {
        const copy = { ...dogToAdd }
        if (event.target.name === "cityId") {
            copy[event.target.name] = event.target.value * 1
        } else {
            copy[event.target.name] = event.target.value
        }
        setDogToAdd(copy)
    }
    const handleAddDog = () => {
        addDog(dogToAdd).then((data) => {
            console.log("🚀 ~ file: AddDog.js:24 ~ addDog ~ data:", data)
            navigate(`/dog/${data.id}`)
        })
    }

    useEffect(() => { handleGetCities() }, [])

    return (
        <>
            <input className="border rounded-md" name="name" onChange={handleUserChoice} placeholder="enter a dog name" />
            <select name="cityId"
                onChange={handleUserChoice}>
                <option>choose a city</option>
                {cities.map((city, index) => (
                    <option key={index} value={city.id}>{city.name}</option>
                ))}
            </select>
            <input className="border rounded-md" name="imageURL" onChange={handleUserChoice} placeholder="enter a dog image url" />
            <button className="bg-teal-500 hover:bg-teal-400 rounded text-white w-24" onClick={handleAddDog}>add dog</button>
        </>
    )
}