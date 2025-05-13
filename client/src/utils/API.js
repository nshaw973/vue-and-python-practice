const link = "https://www.dnd5eapi.co/api/2014";

export const apiData = async (query, filter) => {
let updatedLink = `${link}/${filter}/?name=${query}`;
  try {
    const response = await fetch(`${updatedLink}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const results = await response.json();
    if(!results){
      return []
    }
    return results;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};
