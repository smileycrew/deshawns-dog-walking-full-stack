import { getDogWalker } from "./apiManager"
// click on a dog name
// navigate to the new page
// using the dog id i need to get the dog walker (expanded by dog and walker if possible)
// display the information

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const DogDetail = () => {
    // url parameters
    const { dogId } = useParams()
    // state to hold my 'state'
    const [dogWalker, setDogWalker] = useState({})
    // fetch call to get dog walker from api
    const handleFetchDogWalker = () => {
        getDogWalker(dogId).then((data) => setDogWalker(data))
    }
    // use effect to make the fetch call at startup
    useEffect(() => {
        handleFetchDogWalker()
    }, [])
    return (
        <>
            hi
        </>
    )
}