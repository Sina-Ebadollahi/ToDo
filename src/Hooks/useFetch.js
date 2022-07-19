import React, { useState } from "react";
import axios from "axios";
export default function useFetch() {
  // const [requestOptions, setRequestOptions] = useState({
  //   endPoint: "",
  //   method: "",
  //   headers: {},
  // });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const fetchDataFunction = async (endPoint, method, header, body) => {
    setIsPending(true);
    if (endPoint && endPoint != "") {
      try {
        const axiosInstance = await axios({
          url: requestOptions.endPoint,
          method: requestOptions.method,
          headers: requestOptions.headers,
        });
        if (axiosInstance.status == 200) {
          const d = await axiosInstance.data;
          updateReducerData();
          if (axiosInstance.data) {
            setData(axiosInstance.data);
          } else if (axiosInstance.status >= 500) {
            throw new Error("Server side error!");
          }
        }
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    }
  };

  return {
    data,
    error,
    isPending,
    fetchDataFunction,
  };
}
