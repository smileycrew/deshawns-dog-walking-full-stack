import { useEffect, useState } from "react"
import { getCities } from "./apiManager"

export const Cities = () => {

    const [cities, setCities] = useState([])
    const [cityToAdd, setCityToAdd] = useState("")

    const handleCityToAdd = (event) => {
        setCityToAdd(event.target.value)
    }

    useEffect(() => {
        getCities().then((data) => setCities(data))
    }, [])

    return (
        <>
            <input className="border rounded" onChange={handleCityToAdd} defaultValue={cityToAdd} />
            <button className="bg-blue-500 text-white w-24 h-8 rounded-md hover:bg-blue-400">Save</button>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city.name}</li>
                ))}
            </ul>
        </>
    )
}