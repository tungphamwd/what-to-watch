import axios from "axios";
import { useEffect, useState } from "react";

const useDetail = (type, id) => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}`
      )
      .then((respone) => {
        setDetail(respone.data);
      });
  }, []);

  return detail;
};

export default useDetail;
