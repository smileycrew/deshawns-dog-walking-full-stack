import { useNavigate } from "react-router-dom"
import { assignCitiesToWalker } from "../apiManager"

export const UpdateWalkerCities = ({ walkerId, newCities }) => {

    const navigate = useNavigate()

    const handleAssignCitiesToWalker = () => { assignCitiesToWalker(walkerId, newCities).then(() => navigate("/walkers")) }

    return (
        <button className="bg-blue-500 hover:bg-blue-400 rounded text-white w-24" onClick={handleAssignCitiesToWalker}>update</button>)
}