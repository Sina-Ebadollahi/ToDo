import React, { useState } from "react";
import axios from "axios";
export default function useFetch() {
  // const [requestOptions, setRequestOptions] = useState({
  //   endPoint: "",
  //   method: "",
  //   headers: {},
  // });
  const [data, setData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const fetchDataFunction = async (endPoint, method, header, body) => {
    setIsPending(true);
    if (endPoint && endPoint != "") {
      try {
        const axiosInstance = await axios({
          url: endPoint,
          method: method,
          headers: header,
        });
        if (axiosInstance.status === 200) {
          const d = await axiosInstance.data;
          if (axiosInstance.data) {
            setData(axiosInstance.data);
          } else if (axiosInstance.status >= 500) {
            throw new Error("Server side error!");
          }
        }
        setIsPending(false);
        setRequestError(null);
      } catch (err) {
        setIsPending(false);
        setRequestError(err.message);
      }
    }
  };

  return {
    data,
    requestError,
    isPending,
    fetchDataFunction,
  };
}
