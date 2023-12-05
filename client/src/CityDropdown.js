import { useEffect, useState } from "react"

export const CityDropdown = () => {
    const [cities, setCities] = useState([])
    useEffect(() => { }, [])
    return (
        <select>
            <option>select a city</option>
        </select>
    )
}