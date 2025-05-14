const baseUrl = "https://www.dnd5eapi.co";

export const apiData = async (query, filter, url) => {
  let apiUrl;
  
  if (url) {
    apiUrl = `${baseUrl}${url}`;
  } else {
    apiUrl = `${baseUrl}/api/2014/${filter}/?name=${query}`;
  }
 console.log("API Request:", apiUrl)
  try {
    const response = await fetch(`${apiUrl}`);
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
