export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = () => {
  const response = fetch("/api/dogs")
}