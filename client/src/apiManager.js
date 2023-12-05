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