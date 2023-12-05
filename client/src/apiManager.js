export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = () => {
  const dogs = fetch("/api/dogs").then((response) => {
    response.json()
  })
  return dogs
}