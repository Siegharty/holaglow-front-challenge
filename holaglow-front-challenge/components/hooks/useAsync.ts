import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import React from "react";

export const useAsync = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = React.useState<AxiosResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: AxiosResponse<T | null> = await axios(url, options);
      setData(response);
    } catch (error) {
      console.log(error);
      //setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};
