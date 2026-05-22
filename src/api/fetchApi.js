let harryPotterCharInfo = null;
export async function fetchCharachters() {
  try {
    const repsonse = await fetch("https://hp-api.onrender.com/api/characters");
    if (repsonse.ok) {
      return repsonse;
    } else {
      throw new Error(`HTTP error! status: ${repsonse.status}`); //throw this error api fails
    }
  } catch (error) {
    console.error(error); // throws this error if network / client fails

    throw new Error(`Client:failed ${error}`);
  }
}

async function callHpApi() {
  try {
    if (harryPotterCharInfo == null) {
      const response = await fetchCharachters();
      const data = await response.json();
      harryPotterCharInfo = data.slice(0, 18);
      console.log("harryPotter array updated");
    }
  } catch (e) {
    throw new Error(`Failed to load or parse HP data: ${e.message}`);
  }
}

export async function getCharachters() {
  try {
    if (harryPotterCharInfo == null) {
      await callHpApi();
    }

    if (!harryPotterCharInfo) {
      throw new Error("no  charahcter data available");
    } else {
      return harryPotterCharInfo.map((charachter) => {
        return {
          name: charachter.name,
          image: charachter.image,
          clicked: false,
        };
      });
    }
  } catch (error) {
    console.error("Error in getCharacterNames:", error);
    throw error;
  }
}
