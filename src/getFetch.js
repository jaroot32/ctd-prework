const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getFetch(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching " + endpoint + ":", error);
  }
}