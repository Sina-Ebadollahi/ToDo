import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch(requestData) {
  const [data, setData] = useState({ reqStatus: 0, reqData: null });
  const [requestError, setRequestError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    (function() {
      fetchDataFunction(
        requestData.endPoint,
        requestData.method,
        requestData.header,
        requestData.body
      );
    })();
    return () => {
      cleanUpFunction();
    };
  }, [requestData]);
  const fetchDataFunction = async (endPoint, method, header, body) => {
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
  };
}
