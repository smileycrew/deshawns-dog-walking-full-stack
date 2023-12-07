import { deleteWalker } from "../apiManager"

export const DeleteWalker = ({ walkerId, handleGetWalkers }) => {

    const handleDeleteWalker = () => {
        deleteWalker(walkerId).then(() => handleGetWalkers())
    }

    return (
        <button className="bg-red-500 hover:bg-red-400 rounded text-white w-24" onClick={handleDeleteWalker}>remove</button>
    )
}