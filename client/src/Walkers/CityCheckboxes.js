export const CityCheckboxes = ({ city, cities, walkerAndCities, setWalkerAndCities }) => {

    const handleCityChanges = (event) => {
        if (walkerAndCities.cities.some((city) => city.id === event.target.value * 1)) {
            const updatedWalkerCities = walkerAndCities.cities.filter((city) => city.id !== event.target.value * 1)
            const copy = { ...walkerAndCities, cities: updatedWalkerCities }
            setWalkerAndCities(copy)
        } else {
            const cityToAdd = cities.find((city) => city.id === event.target.value * 1)
            const copy = { ...walkerAndCities }
            copy.cities.push(cityToAdd)
            setWalkerAndCities(copy)
        }
    }

    return (
        <input checked={walkerAndCities.cities?.some((walkerCity) => walkerCity.id === city.id)} type="checkbox" onChange={handleCityChanges} value={city.id} />)
}