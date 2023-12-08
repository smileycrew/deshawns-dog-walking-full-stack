import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCities, getWalkerAndCities } from "../apiManager"
import { CityCheckboxes } from "./CityCheckboxes"
import { UpdateWalkerCities } from "./UpdateWalkerCities"


export const ManageWalkerCities = () => {

    const { walkerId } = useParams()

    const [walkerAndCities, setWalkerAndCities] = useState({})
    const [cities, setCities] = useState([])

    const handleGetWalkerAndCities = () => { getWalkerAndCities(walkerId).then((data) => setWalkerAndCities(data)) }
    const handleGetCities = () => { getCities().then((data) => setCities(data)) }

    useEffect(() => {
        handleGetWalkerAndCities()
        handleGetCities()
    }, [])

    return (
        <>
            <img className="h-40 w-40" src={walkerAndCities.imageURL} alt="" />
            <p>{walkerAndCities.name}</p>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        <CityCheckboxes city={city} cities={cities} walkerAndCities={walkerAndCities} setWalkerAndCities={setWalkerAndCities} />
                        <span>{city.name}</span>
                    </li>
                ))}
            </ul>
            <UpdateWalkerCities walkerId={walkerId} newCities={walkerAndCities.cities} />
        </>
    )
}