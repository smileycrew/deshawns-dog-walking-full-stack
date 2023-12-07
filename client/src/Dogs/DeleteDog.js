import { deleteDog } from "../apiManager"

export const DeleteDog = ({ dogId, handleGetDogs }) => {

    const handleDeleteDog = () => {
        deleteDog(dogId).then(() => handleGetDogs())
    }

    return (
        <button className="bg-red-500 hover:bg-red-400 rounded text-white w-24" onClick={handleDeleteDog}>remove</button>
    )
}