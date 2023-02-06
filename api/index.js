import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      {
        params: {
          bl_latitude: "11.847676",
          tr_latitude: "12.838442",
          bl_longitude: "109.095887",
          tr_longitude: "109.149359",
          //   restaurant_tagcategory_standalone: "10591",
          //   restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "07ec279421msh025e88efaf40e10p1e6227jsn65d6d56ad97c",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};

export const getHotels = async () => {
  try {
    const {
      data: { data },
    } = await axios.get("https://travel-advisor.p.rapidapi.com/hotels/list", {
      params: {
        location_id: "293919",
        adults: "1",
        rooms: "1",
        nights: "2",
        offset: "0",
        currency: "USD",
        order: "asc",
        limit: "30",
        sort: "recommended",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "07ec279421msh025e88efaf40e10p1e6227jsn65d6d56ad97c",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    return null;
  }
};

export const getAttractions = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
      {
        params: {
          tr_longitude: "109.262909",
          tr_latitude: "12.346705",
          bl_longitude: "109.095887",
          bl_latitude: "12.113245",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "07ec279421msh025e88efaf40e10p1e6227jsn65d6d56ad97c",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
