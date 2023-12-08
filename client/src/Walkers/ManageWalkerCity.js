import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ManageWalkerCity = () => {

    const { walkerId } = useParams()

    const [walkerAndCities, setWalkerAndCities] = useState({})

    const handleGetWalkerAndCities = () => {}

    useEffect(() => {}, [])

    return (
        <>hi</>
    )
}
// THEN they are presented with a form with editable inputs for the walkers' details, including checkboxes with the cities that the walker walks in

// GIVEN the user has made changes to the form

// WHEN they click the "Update" button

// THEN the changes are saved to the database, and the user is redirected to the list of walkers. See here for help on completing this story