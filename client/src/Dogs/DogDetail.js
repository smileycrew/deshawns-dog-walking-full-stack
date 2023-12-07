import { getDog } from "../apiManager"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const DogDetail = () => {
    // url parameters
    const { dogId } = useParams()
    // state to hold my 'state'
    const [dog, setDog] = useState({})
    // fetch call to get dog walker from api
    const handleGetDog = () => {
        getDog(dogId).then((data) => {
            setDog(data)
        })
    }
    // use effect to make the fetch call at startup
    useEffect(() => {
        handleGetDog()
    }, [dogId])
    return (
        <>
            <img className="h-40 w-40" src={dog.imageURL} alt="" />
            <p>{dog.name}</p>
            {dog.walker === null ?
                <p>this dog doesn't have a walker</p> :
                <>
                    <img className="h-40 w-40" src={dog.walker?.imageURL} alt="" />
                    <p>{dog.walker?.name}</p>
                </>
            }
        </>
    )
}