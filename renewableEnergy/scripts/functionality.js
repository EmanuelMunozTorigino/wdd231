
export async function LoadData(dataJSON) {
    try {
      const response = await fetch(dataJSON);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error loading data", error);
      return [];
    }
  }