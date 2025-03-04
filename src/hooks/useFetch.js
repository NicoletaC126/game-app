import { useEffect, useState } from "react";

export const baseUrl = "https://api.opendota.com/api";

export const useFetch = (url) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("fetch data", data);
        if (data.length > 0) {
          setApiData(data);
        }
      });
  }, [url]);

  return apiData;
};
