import axios from "axios"

const COORDINATE_API_URL = "https://api.openrouteservice.org/geocode/search"

const getCoordinates = async (
    location,
    apiKey
) => {
    try {
        const response = await axios.get(
            `${COORDINATE_API_URL}?api_key=${apiKey}&text=${location}&boundary.country=${"GB"}`
        );
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.error(error);
        throw new Error("Unable to get coordinates");
      }
};

export default getCoordinates;