import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch() {
  // const [requestOptions, setRequestOptions] = useState({
  //   endPoint: "",
  //   method: "",
  //   headers: {},
  // });
  const [data, setData] = useState({ reqStatus: 0, reqData: null });
  const [requestError, setRequestError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {}, []);
  const fetchDataFunction = async (endPoint, method, header, body) => {
    cleanUpFunction();
    setIsPending(true);
    if (endPoint && endPoint != "") {
      try {
        const axiosInstance = await axios({
          url: endPoint,
          method,
          headers: header,
        });
        setData({ ...data, reqStatus: axiosInstance.status });
        if (axiosInstance.status >= 200 && axiosInstance.status < 202) {
          const d = axiosInstance.data;
          if (d) {
            setData({ ...data, reqData: d });
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
  function cleanUpFunction() {
    setRequestError(null);
    setIsPending(false);
    setData({ reqData: null, reqStatus: 0 });
  }
  return {
    data,
    requestError,
    isPending,
    fetchDataFunction,
  };
}
