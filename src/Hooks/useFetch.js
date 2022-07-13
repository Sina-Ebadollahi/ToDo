import React, { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const fetchDataFunction = async (endPoint, method, header, body) => {
    setIsPending(true);
    if (endPoint && endPoint != "") {
      try {
        const fetchAction = await fetch(endPoint, {
          method,
          headers: header,
          body,
        });
        if (fetchAction.status === 200) {
          const data = await fetchAction.json();
          if (data) {
            setData(data);
          } else {
            setIsPending(false);
            throw new Error("Data is undefined!");
          }
        } else if (fetchAction.status >= 500) {
          throw new Error("Server Side Error!");
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
