const link = "https://www.dnd5eapi.co/api/2014";

export const apiData = async (query, filter) => {
let updatedLink = `${link}/${filter}/`;
  if(query) {
    updatedLink = `${updatedLink}/?name=${query}`
  }
  try {
    const response = await fetch(`${updatedLink}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const results = await response.json();
    console.log(results)
    return results;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};
