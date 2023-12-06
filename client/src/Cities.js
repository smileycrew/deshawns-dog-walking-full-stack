import { useEffect, useState } from "react"
import { addCity, getCities } from "./apiManager"

export const Cities = () => {

    const [cities, setCities] = useState([])
    const [cityToAdd, setCityToAdd] = useState("")
    // function to fetch cities from api
    const handleFetchCalls = () => {
        getCities().then((data) => setCities(data))
    }
    // function to handle city to add input
    const handleCityToAdd = (event) => {
        setCityToAdd(event.target.value)
    }
    // add city and refresh state
    const handleAddCity = () => {
        addCity({ name: cityToAdd }).then(() => handleFetchCalls())
        setCityToAdd("")
    }
    useEffect(() => {
        handleFetchCalls()
    }, [])

    return (
        <>
            <input className="border rounded" onChange={handleCityToAdd} defaultValue={cityToAdd} />
            <button className="bg-blue-500 text-white w-24 h-8 rounded-md hover:bg-blue-400" onClick={handleAddCity}>Save</button>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city.name}</li>
                ))}
            </ul>
        </>
    )
}