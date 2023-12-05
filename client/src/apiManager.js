export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = () => {
  const dogs = fetch("/api/dogs").then((response) => {
    console.log("🚀 ~ file: apiManager.js:8 ~ getDogs ~ dogs:", dogs)
    return response.json()
  })
  
  return dogs
}