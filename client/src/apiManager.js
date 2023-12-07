export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};
// get dogs from api
export const getDogs = () => {
  const dogs = fetch("/api/dogs").then((response) => response.json())
  return dogs
}
// get walkers from api
export const getWalkers = () => {
  const walkers = fetch("/api/walkers").then((response) => response.json())
  return walkers
}
// get cities from api
export const getCities = () => {
  const cities = fetch("/api/cities").then((response) => response.json())
  return cities
}
// get walker cities from api
export const getWalkerCities = (cityId) => {
  return fetch(`/api/walker-cities/${cityId}`).then((response) => response.json())
}
// add city to api
export const addCity = (cityObject) => {
  return fetch("/api/cities/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityObject)
  })
}
// get dog-walker
export const getDog = (dogId) => {  
  return fetch(`/api/dog/${dogId}`).then((response) => response.json())
}
// get dogs with walkers from api
// export const getDogsWithWalkers = () => {
//   return fetch("/api/dogs-with-walkers").then((response) => response.json())
// }
// add dog to api
export const addDog = (dogObject) => {
  return fetch("/api/dog/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dogObject)
  }).then((response) => response.json())
}