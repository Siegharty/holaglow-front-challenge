import React from "react";

type useAsyncProps = () => Promise<any>;

const useAsync = <T>(promise: useAsyncProps) => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await promise();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [promise]);

  return { data, error, loading };
};

export default useAsync;
